const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//listen on the connection event for incoming sockets and log it to the console.
io.on("connection", (socket) => {
  console.log("a user connected");
  io.emit("chat message", "a user connected");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("chat message", "a user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
