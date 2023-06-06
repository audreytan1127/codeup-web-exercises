// "use strict"
// Audrey, Ava, Arusa Solution
// let askForOddNumber;
//
// while (true) {
//     askForOddNumber = prompt("Enter an odd number between 1 and 50.");
//     askForOddNumber = parseInt(askForOddNumber);
//     if (askForOddNumber % 2 !== 0 && askForOddNumber >= 1 && askForOddNumber <= 50) {
//         console.log(`Number to skip is ${askForOddNumber}`);
//         break;
//     }
// }
// for(let i = 1; i<= 50; i++) {
//     if (i === askForOddNumber) {
//         console.log(`Yikes! We're skipping the number ${askForOddNumber}`);
//         continue;
//     }
//     console.log(`here is the odd number: ${i}`);
// }

//Kurt's solution
// function numberOneThruFifty() {
//     return parseInt(prompt("Enter an odd number 1 through 50."));
// }
// function promptUntilOdd () {
//     do{
//         const userNumber = numberOneThruFifty();
//         if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
//             console.log(`Number to skip is: ${userNumber}`);
//             for(let i = 1; i <= 50; i++) {
//                 if(i === userNumber) {
//                     console.log(`yikes! skipping ${i}`);
//                     continue;
//                 }
//                 if (i % 2) {
//                     console.log(`Here's an odd number: ${i}`);
//                 }
//             }
//             break;
//         }
//         console.log("Invalid input");
//     } while (true)
// }
// promptUntilOdd();

// Jeremy's Solution
// let userNumber
// do {
//     userNumber = prompt("Please enter an odd number between 1-50?");
//     if(userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0) {
//         alert("Number entered is outside the acceptable range or an even number. Please try again.");
//     }
//     else
//         break;
// } while (true);
// for (let i = 1; i <= 50; i += 2) {
//     if(i == userNumber) {
//         console.log(`Yikes! Skipping over: ${userNumber}`);
//         continue;
//     }
//     console.log(`There is an odd number: ${i}.`);
// }