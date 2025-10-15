const prompt = require("prompt-sync")();
let number=prompt("enter the 3 numbers")
if(number.length<=3){
    let inverse=number.split("").reverse().join("");
    console.log("l'inverse est :",inverse);
}
else{
    console.log("the number inccorrect")
}
