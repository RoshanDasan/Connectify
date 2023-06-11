import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface User {
  userId: string;
  socketId: string;
}

let activeUsers: User[] = [];

const socketConfig = (io: Server<DefaultEventsMap, any>) => {
  io.on("connection", (socket: Socket<DefaultEventsMap, any>) => {
    console.log(`${socket.id} user connected`);

    socket.on("new-user-add", (newUserId: string) => {
      if (!activeUsers.some((user) => user.userId === newUserId)) {
        activeUsers.push({ userId: newUserId, socketId: socket.id });
        console.log(`new user connected: ${activeUsers}`);
      }
      io.emit("get-users", activeUsers);
    });

    socket.on("send-message", (data: any) => {
      const { receiverId } = data;
      const user = activeUsers.find((user) => user.userId === receiverId);
      console.log(`sending message to ${receiverId}`);
      if (user) io.to(user.socketId).emit("receive-message", data);
    });

    socket.on("disconnect", () => {
      activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
      console.log(`user disconnected: ${activeUsers}`);
      io.emit("get-users", activeUsers);
    });
  });
};

export default socketConfig;
