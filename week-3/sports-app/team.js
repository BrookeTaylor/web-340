/*
============================================
; Title:  team.js
; Author: Professor Krasso
; Date:   22 January 2022
; Description: Week three assignment. 
;===========================================
*/

// Create a class named Team with properties for name, mascot, and playerCount.
class Team {

    // Initialize the classes properties in the constructor.   
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot; 
        this.playerCount = playerCount;
    }
}

// Export the class using Node’s module system. 
module.exports = Team;