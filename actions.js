const express = require("express");
const cors = require("cors");
const actionModel = require("./data/helpers/actionModel.js");

  server.get('/actions', (req, res) => {
    actionModel
      .get()
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  
  server.get('/actions/:id', (req, res) => {
    actionModel
      .get(req.params.id)
      .then(action => {
        res.status(200).json(action);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  
  
  
  module.exports = server;