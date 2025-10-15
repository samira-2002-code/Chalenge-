const prompt = require("prompt-sync")();
let number1=prompt("enter the number1");
let number2=prompt("enter the number2")
if(number1>number2){
  console.log("le plus grande et number1")  
}
else if(number1<number2){
    console.log("le plus grande et number2")
}
else{ 
    console.log("number1=number2")
}


