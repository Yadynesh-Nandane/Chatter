import http from "http";
import app from "../app.js";
import express from "express";
import { Server } from "socket.io";

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("friendRequest", (data) => {
    console.log("Friend request sent from frontend.", data);
  })
});

export { io, server };
