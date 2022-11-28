const db = require('../models');

const express = require('express')
const router = express.Router()

const index = (req, res) => {
  db.Game.find({}, (error, games) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      games,
      requestedAt: new Date().toLocaleString()
    });
  });
};

const search = (req, res) => {
  db.Game.findOne({email:req.params.id}, (error, game) => {
    //console.log(req.params.id)

    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      game
    });
  })
  };


const create = (req, res) => {
  db.Game.create(req.body, (error, createdGame) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json(createdGame); //  .json() will send proper headers in response so client knows it's json coming back
  });
  
};

const destroy = (req, res) => {
  db.Game.deleteOne({email:req.params.id}, (error, deletedGame) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      message: `${deletedGame.name} deleted successfully`
    });
  });
};

const update = (req, res) => {
  db.Game.findOneAndUpdate({email:req.params.id},
    {
      $set: req.body
    },
      {
    upsert: true,
    new: true
  },
    (error, updatedGame) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json(updatedGame)
  });
};


module.exports = {
    index,
    create,
    destroy,
    update,
    search
}
