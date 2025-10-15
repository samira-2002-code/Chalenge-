const prompt = require("prompt-sync")();
let age=prompt("enter the number")
if(age>=18)
{
 console.log("eligib/deux e au vote")   
}
else if (age<18)
{
    console.log("non eligible")
}
