"use strict"

//Exercise 1: Print multiplication table!
// function showMultiplicationTable (userNumber) {
//     console.log(`${userNumber}`)
//     let i = 1
//     while (i <= 10) {
//         console.log(`${userNumber} x ${i} = ${userNumber * i}`);
//         ++i
//     }
// }
// showMultiplicationTable(3);

//Exercise 2: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

  // for (let t=0; t <= 10; ++t) {
  //     let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
  //     if (randomNumber % 2 === 0) {
  //         console.log(`${randomNumber} is an even number!`);
  //     } else{
  //         console.log(`${randomNumber} is an odd number!`);
  // }}
  //

//Exercise 3: create for loop that creates output below:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

//     let output = '';
// let inputRows = 9;
//     for (let i = 1; i <= inputRows; i++) {
//         console.log(String(i).repeat(i));
//         }
//     console.log(output);

//Exercise 4: create a for loop to create output below:
// 100
// 95
// 90
// 85
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for (let i = 100; i >= 5; i -= 5) {
//     console.log (i);
// }