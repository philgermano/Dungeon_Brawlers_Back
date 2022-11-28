const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    username:{type:String, required: true},
    email:{
        type:String, required: true, unique: true
    },
    playerRoom: {type: Number},
    playerHealth: {type: Number} ,
    enemyRoom: {type: Number},
    enemyHealth: {type: Number} 
    

});

    const Game = mongoose.model('Game', gameSchema)

module.exports = Game;