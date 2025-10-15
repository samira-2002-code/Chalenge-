const prompt = require("prompt-sync")();
let nomber=prompt("enter the number");
if(nomber>0)
{
    console.log("the number is postif")
   
}
else if(nomber<0)
{
    console.log("the number is negatif")
}
else {
    console.log("the number is null");
}