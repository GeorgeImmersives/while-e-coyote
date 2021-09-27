const prompt = require("prompt-sync")();

let num = prompt("Enter some numbers (type 'done' when complete): ");
let isDone = 0;

while(isDone != 1){
    num = prompt('');
    if(num == "done"){
        isDone = 1;
    }
}