"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let activeUsers = [];
let activeVideoCall = [];
const socketConfig = (io) => {
    io.on("connection", (socket) => {
        socket.on("new-user-add", (newUserId) => {
            if (!activeUsers.some((user) => user.userId === newUserId)) {
                activeUsers.push({ userId: newUserId, socketId: socket.id });
                console.log(`new user connected: ${newUserId}, ${socket.id}`);
            }
            io.emit("get-users", activeUsers);
        });
        socket.on("send-message", (data) => {
            const { receiverId } = data;
            const user = activeUsers.find((user) => user.userId === receiverId);
            console.log(`sending message to ${receiverId}`);
            if (user) {
                io.to(user.socketId).emit("notification", data);
                io.to(user.socketId).emit("receive-message", data);
            }
        });
        socket.on("me", (userId) => {
            if (!activeVideoCall.some((user) => user.userId === userId)) {
                activeVideoCall.push({ userId, socketId: socket.id });
            }
            socket.emit("activeforcall", activeVideoCall);
        });
        socket.on("calluser", ({ userToCall, signalData, from, name }) => {
            io.to(userToCall).emit("calluser", { signal: signalData, from, name });
        });
        socket.on("answercall", (data) => {
            io.to(data.to).emit("callaccepted", data.signal);
        });
        socket.on("callend", (userToCall) => {
            io.to(userToCall).emit("callingcut", "call ended");
        });
        socket.on("disconnect", () => {
            activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
            console.log(`user disconnected: ${socket.id}`);
            io.emit("get-users", activeUsers);
            activeVideoCall = activeVideoCall.filter((user) => user.socketId !== socket.id);
            io.emit("activeforcall", activeVideoCall);
        });
    });
};
exports.default = socketConfig;
