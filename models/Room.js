const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
// for multiplayer. unneeded in single.


    // Lobby Model:
    // ID: string,
    // playerID: string,
    // aiHealth: number,
    // playerHealth: number,
    // playerItems: [strings],
    // aiItems: [strings],
    // playerLocation: number,
    // aiLocation: number,
    // password: string
    
    


});

    const Room = mongoose.model('Room', roomSchema)

module.exports = Room;