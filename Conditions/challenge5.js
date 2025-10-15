const prompt = require("prompt-sync")();
let score=prompt("enter the score")
if(score>=90 && score<=100){
    console.log("affiche la note A");
}
else if(score>=80 && score<=89){
    console.log("affiche la note B");
}
else if (score>=70 && score<=79){
    console.log("affiche la note C");
}
else if(score>=60 && score<=69){
    console.log("affiche la note D");
}

else{
    console.log("affiche la note F");
}
