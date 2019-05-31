const express = require("express");
const router = express.Router();
const projectdb = require("../data/helpers/projectModel");

router.use(express.json());

router.get("/", (req, res) => {
  projectdb
    .get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: { message: "Cannot retrieve data at this time" } });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;
  projectdb
    .insert(newProject)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: { message: "Cannot retrieve the data at this time" } });
    });
});

router.put("/:id", (req, res) => {
  const updateProject = req.body;
  const id = req.params.id;

  projectdb
    .update(id, updateProject)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: err, message: "Could not update." });
    });
});

router.delete("/:id", (req, res) => {
  const deleteProject = req.params.id;
  dbaction
    .remove(deleteProject)
    .then(action => {
      if (action) {
        dbaction.remove(deleteProject).then(removeAction => {
          res.status(201).json(removeAction);
        });
      } else {
        res
          .status(404)
          .json({ error: err, message: "This user does not exist." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "User could not be deleted at this time." });
    });
});

module.exports = router;
