import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();

let server = http.createServer(app);

let io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
    },
});

export const getReceiverSocketID = (receiverID) => {
    return useSocketMap[receiverID];
};

const useSocketMap = {}; //{userID : sockedID}

io.on("connection", (socket) => {
    // console.log("a user connected", socket.id);

    const userID = socket.handshake.query.userID;
    if (userID != "undefined") useSocketMap[userID] = socket.id;

    io.emit("getOnlineUsers", Object.keys(useSocketMap));

    //socket.on() is used to listen to events. can be used both client and server.
    socket.on("disconnect", () => {
        // console.log("user disconnected", socket.id);
        delete useSocketMap[userID];
        io.emit("getOnlineUsers", Object.keys(useSocketMap));
    });
});

export { app, io, server };
