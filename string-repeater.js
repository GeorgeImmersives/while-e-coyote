const prompt = require("prompt-sync")();

let strng = prompt("Enter a string: ");
let newStrng = '';

while(newStrng.length < 10){
    newStrng = newStrng+strng;
    console.log(newStrng);
}