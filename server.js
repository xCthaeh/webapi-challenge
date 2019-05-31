const cors = require("cors");
const express = require("express");
const routerProjects = require("./router/routerProjects");
const routerActions = require("./router/routerActions");

const server = express();
server.use(cors());
server.use(express.json());

server.use("/api/projects", routerProjects);
server.use("/api/actions", routerActions);

server.get("/", (req, res) => {
  res.send(`<h1>Api is working... :P</h1>`);
});

module.exports = server;
