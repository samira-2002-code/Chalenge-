const prompt = require("prompt-sync")();
let n=Number(prompt ("enter the number "))
for(let i=1;i<=10;i++){
    let result=n*i;
    console.log(`${n}*${i}=${result}`);
}