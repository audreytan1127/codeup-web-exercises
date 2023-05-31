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
 *  sayHello(myName);
 *
 *
 *
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

var random = Math.floor((Math.random() * 3) + 1);

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
 const percentTip = prompt ("How much would you like to tip?")
 const tipAmount = calculateTip(percentTip, billTotalDollars)
const billAndTip = (parseInt(tipAmount)+parseInt(billTotalDollars))
 alert("This is the amount you are tipping $" + tipAmount)
 alert("This is the total of the bill $" + billAndTip)
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
function applyDiscount(originalPriceDollars, discountPercent) {
    const discountDecimal = parseInt(discountPercent) / 100;
    console.log("discount as decimal => ", discountDecimal);
    const newDiscountedTotal = parseInt(originalPriceDollars) - (discountDecimal * parseInt(originalPriceDollars))
    console.log("new total => ", newDiscountedTotal);
    return newDiscountedTotal;
}
let originalPriceDollars = prompt("What is the price of the item in dollars?")
let discountPercent = prompt("What is the discount in percent form?")
const newPriceWithDiscount = applyDiscount(originalPriceDollars, discountPercent);
alert("This is the new price with the discount applied $" + newPriceWithDiscount)