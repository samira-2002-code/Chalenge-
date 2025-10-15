const prompt = require("prompt-sync")();
let annee=prompt("enter annee")
if(annee% 4==0){
    console.log("annee et bissextille");
} 
else if(annee!==0){
    console.log("annee pas bissextille");
}
else{
    console.log("annee+ n'est pas bissextille");
}
