const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    username:{type:String, required: true, unique: true},
    email:{
        type:String, required: true, unique: true
    },
    playerDet:[{ 
        location: {type: Number},
        direction:{type: String},
        health: {type: Number} 
    }],
    enemyDet:[{ 
        location: {type: Number},
        direction:{type: String},
        health: {type: Number} 
    }]

});

    const Game = mongoose.model('Game', gameSchema)

module.exports = Game;