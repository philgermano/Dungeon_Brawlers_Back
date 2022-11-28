const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    email:{
        type:String, required: true, unique: true
    },
    username:{type:String, required: true},
    playerRoom: {type: Number},
    playerHealth: {type: Number} ,
    enemyRoom: {type: Number},
    enemyHealth: {type: Number} 
    

});

    const Game = mongoose.model('Game', gameSchema)

module.exports = Game;