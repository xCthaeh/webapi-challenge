const express = require("express");
const cors = require("cors");
const projectModel = require("./data/helpers/projectModel.js");

const server = express();
server.use(cors());
server.use(express.json());

server.get("/projects", (req, res) => {
  projectModel
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.get("/projects/:id", (req, res) => {
  projectModel
    .get(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/projects", (req, res) => {
  const { name, description } = req.body;
  const newProject = { name, description };

  if (!newProject) {
    res.status(400).json({ errorMessage: "Required field" });
  } else {
    projectModel
      .insert(newProject)
      .then(newProjectRes => {
        res.status(201).json({ posted: newProjectRes });
      })
      .catch(err => {
        res.send(err);
      });
  }
});

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const updatedProject = req.body;
  
    projectModel
      .update(id, updatedProject)
      .then(updateProject => {
        res.status(201).json({ "Project Updated": updateProject });
      })
      .catch(err => {
        res.send(err);
      });
  })
  
  server.delete("/projects/:id", (req, res) => {
    projectModel
      .remove(req.params.id)
      .then(count => {
        res.status(201).json(count)
      })
      .catch(err => {
        res.status(500).json({ error: err })
      })
  }) 