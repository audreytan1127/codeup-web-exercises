"use strict"

let askForOddNumber;

while (true) {
    askForOddNumber = prompt("Enter an odd number between 1 and 50.");
    askForOddNumber = parseInt(askForOddNumber);
    if (askForOddNumber % 2 !== 0 && askForOddNumber >= 1 && askForOddNumber <= 50) {
        console.log(`Number to skip is ${askForOddNumber}`);
        break;
    }
}
for(i = 1; i<= 50; i++) {
    if (i === askForOddNumber) {
        console.log(`oopsy! we're skipping the number ${askForOddNumber}`);
        continue;
    }
    console.log(`here is the odd number: ${i}`);
}