const prompt = require("prompt-sync")();
let motdepasse=prompt("enter mot de pass");
let chifre=/[0-9]/;
let spcial = /[&é"']/
if(motdepasse<6){
    console.log("faible");
}
else if(motdepasse>=6 && chifre.test(motdepasse)){
    console.log("moyen");
}
else if(motdepasse >= 6 && chifre.test(motdepasse)  && spcial.test(motdepasse )){
    console.log("fort")
}else console.log("faible");