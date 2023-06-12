"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let activeUsers = [];
const socketConfig = (io) => {
    io.on("connection", (socket) => {
        console.log(`${socket.id} user connected`);
        socket.on("new-user-add", (newUserId) => {
            if (!activeUsers.some((user) => user.userId === newUserId)) {
                activeUsers.push({ userId: newUserId, socketId: socket.id });
                console.log(`new user connected: ${activeUsers}`);
            }
            io.emit("get-users", activeUsers);
        });
        socket.on("send-message", (data) => {
            const { receiverId } = data;
            const user = activeUsers.find((user) => user.userId === receiverId);
            console.log(`sending message to ${receiverId}`);
            if (user)
                io.to(user.socketId).emit("receive-message", data);
        });
        socket.on("disconnect", () => {
            activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
            console.log(`user disconnected: ${activeUsers}`);
            io.emit("get-users", activeUsers);
        });
    });
};
exports.default = socketConfig;
