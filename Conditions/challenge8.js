const prompt = require('prompt-sync')();
let color=prompt("enter the color : ")
if(color=="red"){
    console.log("stop");
}
else if(color=="yellow"){
    console.log("get prepared")
}
else if(color=="green"){
    console.log("start");
}
else{
    console.log("color invalid"); 
}