const prompt = require('prompt-sync')();
let number=prompt("enter the number ")
if(number%3==0){
    console.log("Fizz");
}
else if (number%5==0){
    console.log("Buzz");
}
else if(number % 3 == 0 && number % 5 == 0){
    console.log("FizzBuzz");
}
else{
    console.log("affiche le number lui meme");
}