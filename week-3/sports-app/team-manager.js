/*
============================================
; Title:  team-manager.js
; Author: Professor Krasso
; Date:   22 January 2022
; Description: Week three assignment. 
;===========================================
*/

const Team = require("./team");



// Create a function named getTeams and return the 
// array of Team objects
function getTeams() {

    // Create an array of five Team objects and assign 
    // it to a variable named teams
    let teams = [];

    // Make sure you use the Team object from the team.js file 
    // to populate each element in the array.  
    teams.push(new Team("St. Louis Blues", "Louie",  "27"));
    teams.push(new Team("Seattle Kraken", "Buoy the Troll",  "25"));
    teams.push(new Team("Philadelphia Flyers", "Gritty",  "26"));
    teams.push(new Team("New Jersey Devils", "NJ Devil",  "25"));
    teams.push(new Team("Detroit Red Wings", "Al the Octopus",  "25"));

    return teams;

}



// Create a function named getTeam with a single parameter 
// for name. 
function getTeam(name) {

    return teams.find(team => team.name === name);


}




// Create a function named displayTeam with a single parameter 
// for a team object.  In the body of the function, return 
// a formatted string that uses the team objects properties 
// (name, mascot, and playerCount).  
function displayTeam(team) {

        return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: " + team.playerCount; 

}






// Export the functions using Node’s module system.
module.exports = { getTeams, getTeam, displayTeam };