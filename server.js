require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./users/userRouter");
const eventRouter = require("./events/eventsRouter");
const menuRouter = require("./menu/menuRouter");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/user/", userRouter);
server.use("/event/", eventRouter);
server.use("/menu/", menuRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Pot Luck API" });
});

module.exports = server;
