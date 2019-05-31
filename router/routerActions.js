const express = require("express");
const router = express.Router();
const actiondb = require("../data/helpers/actionModel");
router.use(express.json());

router.get("/", (req, res) => {
  actiondb
    .get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: { message: "Cannot retrieve data at this time." } });
    });
});

router.post("/", (req, res) => {
  const newAction = req.body;
  actiondb
    .insert(newAction)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: { message: "Cannot retrieve data at this time." } });
    });
});

router.put("/:id", (req, res) => {
  const updateAct = req.body;
  const id = req.params.id;
  actiondb
    .update(id, updateAct)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err, message: "Cannot retrieve data at this time." });
    });
});

router.delete("/:id", (req, res) => {
  const actionid = req.params.id;
  actiondb
    .remove(actionid)
    .then(action => {
      if (action) {
        dbaction.remove(actionid).then(removeaction => {
          res.status(201).json(removeaction);
        });
      } else {
        res
          .status(404)
          .status(404)
          .json({ error: err, message: "User ID does not exist." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "User could not be deleted at this time." });
    });
});

module.exports = router;
