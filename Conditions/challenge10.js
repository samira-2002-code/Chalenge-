const prompt = require('prompt-sync')();
let username=prompt(" enter username :")
let passcode=prompt("enter passcode :")

if(username === "admin" && passcode === "1234"){
    console.log(" Bienvenue Admin");
}
if(username === "admin" && passcode !== "1234"){
    console.log("MOt de pass incorrect");
}else{
    console.log("utilisateur introuvable");
}