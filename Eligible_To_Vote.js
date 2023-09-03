const prompt = require('prompt-sync')();
var a = prompt('Enter Your Age: ');
a = Number.parseInt(a)
if (a>=18){
    console.log("You are eligible to Vote!!");
}
else{
    console.log("You are not eligible to Vote!!");
}