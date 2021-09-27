const prompt = require("prompt-sync")();

let n = prompt('Enter a value for "n": ');
let a = 0;
let b = 1;
let count = 0;

while(count < 9){
    console.log(a);
    temp = b;
    b = b + a;
    a = temp;
    count++;
}