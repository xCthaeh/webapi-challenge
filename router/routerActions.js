const express = require("express");
const db = require("../data/helpers/actionModel");
const dbProjects = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allActions = await db.get();
    res.json({ message: allActions });
  } catch (err) {
    res.status(500).json({ message: "internal server erros" });
  }
});

router.get("/:id", validateID, async (req, res) => {
  try {
    const singleAction = await db.get(req.params.id);
    res.json({ message: singleAction });
  } catch (err) {
    res.status(500).json({ message: "internal server erros" });
  }
});

router.post("/", async (req, res) => {
  try {
    const validateProject = await dbProjects.get(req.body.project_id);

    if (validateProject) {
      const newAction = await db.insert(req.body);
      res.json({ message: newAction });
    } else {
      res.status(404).json({ message: "not a valid project id" });
    }
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.put("/:id", validateID, async (req, res) => {
  try {
    const updatedAction = await db.update(req.params.id, req.body);
    res.json({ message: updatedAction });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/:id", validateID, async (req, res) => {
  try {
    const deletedAction = await db.remove(req.params.id);
    res.json({ message: deletedAction });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

async function validateID(req, res, next) {
  if (!req.params.id) {
    res.status(400).json({ message: "This Requires an ID" });
  } else {
    const idValidate = await db.get(req.params.id);
    if (!idValidate) {
      res.status(404).json({ message: "invalid user ID" });
    }
  }
  next();
}

module.exports = router;
