const prompt = require("prompt-sync")();
let A=prompt("enter value for A")
let B=prompt("enter value for B") 
let C=prompt("enter value for C")

A=B;
B=C;
C=A;

console.log("A=",A)
console.log("B=",B)
console.log("C=",C)
