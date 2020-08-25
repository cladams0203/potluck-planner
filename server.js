require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./users/userRouter");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/user/", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Pot Luck API" });
});

module.exports = server;
