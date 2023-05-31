"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * function sayHello(name) {
 *     console.log("hello " + name)
 * }
 * sayHello("audrey")
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * sayHello("Audrey");
 * function sayHello(name) {
 *     return "Hello " + name
 * }
 * const helloMessage = sayHello("audrey");
 * console.log(helloMessage);
 *
 *
 * console.log 'helloMessage' to check your work
 */

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 *
 *  let myName = "Audrey"
 *  console.log(sayHello(myName));
 *
 *
 *
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * function isTwo(num) {
 *     return num === 2
 * }
 * const resp = isTwo(random);
 * console.log(resp)
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 */
/**
 var random = Math.floor((Math.random() * 3) + 1);

 function calculateTip(percentTip, billTotalDollars) {
  return (percentTip / 100) * billTotalDollars
  }
*/
/* Examples:
 > calculateTip(0.20, 20) // returns 4
 > calculateTip(0.25, 25.50) // returns 6.375
 > calculateTip(0.15, 33.42) // returns 5.013
*/

/**
 *  TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 /**
 *
 * @type {string}
 */
/**
 const billTotalDollars = prompt("How much was the total bill in dollars?")
 const percentTip = prompt ("How much would you like to tip in whole percentages?")
 const tipAmount = calculateTip(percentTip, billTotalDollars)
const billAndTip = (parseFloat(tipAmount) + parseFloat(billTotalDollars))
 alert("This is the amount you are tipping $" + tipAmount.toFixed(2)
 alert("This is the total of the bill $" + billAndTip.toFixed(2)
*/


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
/*
function applyDiscount(originalPriceDollars, discountPercent) {
    const discountDecimal = parseFloat(discountPercent) / 100;
    console.log("discount as decimal => ", discountDecimal);
    const newDiscountedTotal = parseFloat(originalPriceDollars) - (discountDecimal * parseFloat(originalPriceDollars))
    console.log("new total => ", newDiscountedTotal);
    return newDiscountedTotal;
}
let originalPriceDollars = prompt("What is the price of the item in dollars?")
let discountPercent = prompt("What is the discount in percent form?")
const newPriceWithDiscount = applyDiscount(originalPriceDollars, discountPercent);
alert("This is the new price with the discount applied $" + newPriceWithDiscount)
*/

/* create isOdd function that checks if number is odd.
function isOdd(random) {
    if (random%2==1) {
        return random + " is an odd number"
    } else {
        return random + " is not an odd number"
    }
}
console.log(isOdd(random));
 */

/* create isEven function that checks if number is even.
function isEven(random) {
    if (random%2==0) {
        return random + " is an even number"
    } else {
        return random + " is not an even number"
    }
}
console.log(isEven(random));
 */

/* create identity(input) function that returns the input exactly as provided
function identity(input) {
    return console.log(input)
}
let input = "this is my input. this should look like my output."
identity(input);

 */

/* create function isFive to equal 5
function isFive(input) {
    return "5"
}
let input = 5
console.log(isFive(input));
*/

/* create function addFive to add five to some input
function addFive(random) {
    return parseInt(random) + parseInt(5)
}
console.log(addFive(random));
*/

/*
function isMultipleOfFive(random) {
    return random%5==0
}
console.log("this is a random number = " + random)
console.log("is this number divisible by 5? " + isMultipleOfFive(random));

 */

function isThree(number) {
    return number
}
let number = 3
console.log(isThree(number))