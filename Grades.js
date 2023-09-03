const prompt = require('prompt-sync')();
var a = prompt('Enter Your Percentage: ');
a = Number.parseInt(a)
if (a>85){
    console.log("Distinction with "+a+"%");
}
else if(a<=85 && a>70){
    console.log("A Grade with "+a+"%");
}
else if(a<=70 && a>60){
    console.log("B Grade with "+a+"%");
}
else if(a<=60 && a>45){
    console.log("C Grade with "+a+"%");
}
else if(a<=45 && a>30){
    console.log("PASS with "+a+"%");
}
else{
    console.log("Fail with "+a+"%");
}