const socket = require("socket.io");

const initializeSocket = (server) => {
  const io = socket(server, {
    cors: {
      origin: "https://devlinker.tech",
    },
  });

  io.on("connection", (socket) => {
    // Handle Events

    socket.on("joinChat", ({ firstName, userId, toUserId }) => {
        const roomId = [userId, toUserId].sort().join("_");
        console.log(firstName + " joined the room with id : "+ roomId);
        socket.join(roomId);
    });

    socket.on("sendMessage", ({firstName, userId, toUserId, text}) => {
        const roomId = [userId, toUserId].sort().join("_");
        io.to(roomId).emit("messageReceived", {firstName, text});
    });

    socket.on("disconnect", () => {

    });
  });
};

module.exports = initializeSocket;
