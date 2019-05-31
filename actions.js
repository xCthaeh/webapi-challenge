const express = require("express");
const cors = require("cors");
const actionModel = require("./data/helpers/actionModel.js");

server.use(cors());
server.use(express.json());

server.get("/actions", (req, res) => {
  actionModel
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.get("/actions/:id", (req, res) => {
  actionModel
    .get(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/actions", (req, res) => {
  const { project_id, description, notes } = req.body;
  const newAction = { project_id, description, notes };

  if (!newAction) {
    res.status(400).json({ errorMessage: "Required field" });
  } else {
    actionModel
      .insert(newAction)
      .then(newActionRes => {
        res.status(201).json({ post: "New action was added." });
      })
      .catch(err => {
        res.send(err);
      });
  }
});

server.put("/actions/:id", (req, res) => {
  const { id } = req.params;
  const updatedAction = req.body;

  actionModel
    .update(id, updatedAction)
    .then(updateAction => {
      res.status(201).json({ "Project has been updated.": updateAction });
    })
    .catch(err => {
      res.send(err);
    });
});

server.delete("/actions/:id", (req, res) => {
  const { id } = req.params;
  actionModel
    .remove(id)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = server;
