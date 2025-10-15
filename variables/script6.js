const prompt = require("prompt-sync")();
let distance=prompt("enter distancein meters")
let vitesse=prompt("enter vitesse in m/s")
let temps=prompt("enter temps in seconds")
distance=vitesse*temps 

console.log("distance=",distance)

