"use strict";

/* ########################################################################## */

/**
 *
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//


/**function analyzeColor(colors) {

    if (colors === 'blue') {
        return "the ocean is blue";
    } else if (colors === 'red') {
       return "apples can be red";
    } else if (colors === 'yellow') {
      return "sunflower petals are yellow";
    } else if (colors === 'indigo') {
       return "blueberries are indigo";
    } else if (colors === 'green') {
        return "the grass is greener right next to me";
    } else if (colors === 'violet') {
        return "violet flowers are pretty";
    } else if (colors === 'orange') {
        return "oranges are...pretty orange";
    } else {
        return `sorry i don't know the color ${colors}!`;
    }
}

console.log(analyzeColor("red"));
console.log(analyzeColor('blue'));
console.log(analyzeColor('brown'));
*/


/**
 *
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 var randomColor = colors[Math.floor(Math.random() * colors.length)];
function analyzeColor(colors) {

    if (colors === 'blue') {
        return "the ocean is blue";
    } else if (colors === 'red') {
        return "apples can be red";
    } else if (colors === 'yellow') {
        return "sunflower petals are yellow";
    } else if (colors === 'indigo') {
        return "blueberries are indigo";
    } else if (colors === 'green') {
        return "the grass is greener right next to me";
    } else if (colors === 'violet') {
        return "violet flowers are pretty";
    } else if (colors === 'orange') {
        return "oranges are...pretty orange";
    } else {
        return `sorry i don't know the color ${colors}!`;
    }
}
console.log(randomColor);
console.log(analyzeColor(randomColor));
*/

/**
 *
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
function analyzeColor(colors) {

    switch (colors) {
        case "blue":
            return"blueberries are kinda blue";
            break;
        case "red":
            return"apple are sometimes red";
            break;
        case "yellow":
            return"lemons are yellow!";
            break;
        case "indigo":
            return"not that many things are indigo";
            break;
        case "green":
            return"kale is green af";
            break;
        case "violet":
            return"eggplant skin is violet";
            break;
        default:
            return"sorry i don't know that color!";
}}
console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
*/

/**
 *
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/**
const userColor =prompt("what color do you like?")
function analyzeColor(userColor) {
    switch (userColor) {
        case "blue":
            alert("blueberries are kinda blue");
            break;
        case "red":
           alert("apple are sometimes red");
            break;
        case "yellow":
            alert("lemons are yellow!");
            break;
        case "indigo":
           alert("not that many things are indigo");
            break;
        case "green":
            alert("kale is green af");
            break;
        case "violet":
            alert("eggplant skin is violet");
            break;
        default:
            alert("sorry i don't know that color!");
    }}
analyzeColor(userColor);
*/

/* ########################################################################## */

/**
 *
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/** calculateTotal as a switch and case
function calculateTotal(luckyNumber, totalAmount) {
    switch(luckyNumber) {
        case 0:
            return totalAmount;
        case 1:
            return totalAmount * (1-0.10);
        case 2:
            return totalAmount * (1-0.25);
        case 3:
            return totalAmount * (1-0.35);
        case 4:
            return totalAmount * (1-0.50);
        case 5:
            return "Your total is 0!";
        default:
            return "Sorry, an error has occurred!";
    }
}

console.log(calculateTotal(1, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
*/

/** if/else with random lucky number and total price prompt
const userNumber = prompt ("Your total bill is: ");
const luckyNumber = Math.floor(Math.random() * 6);
function calculateTotal(luckyNumber, totalAmount){
    if (luckyNumber===0) {
        return totalAmount;
    } else if (luckyNumber===1) {
        return totalAmount * (1 - 0.10)
    } else if (luckyNumber===2) {
        return totalAmount * (1 - 0.25)
    } else if (luckyNumber===3) {
        return totalAmount * (1 - 0.35)
    } else if (luckyNumber===4) {
        return totalAmount * (1 - 0.50)
    } else if (luckyNumber===5) {
        return totalAmount * (1 - 1.00)
    }
}
console.log(calculateTotal(luckyNumber));
console.log(calculateTotal(5, 100));
*/

/** initial problem solve:prompt the user for lucky number and cart total!
const luckyNumber = prompt("Please enter your lucky number.")
const totalPrice = prompt("How much is your cart total?")
function calculateTotal (luckyNumber, totalPrice) {
if(luckyNumber < 0 || luckyNumber > 5) {
alert("sorry you entered an invalid lucky number!")
}
    if (luckyNumber === '0') {
        alert("Sorry! No discount will be applied to your cart.")
    } else if (luckyNumber === '1') {
        alert("$" + (totalPrice - (totalPrice * 0.10)))
    } else if (luckyNumber === '2') {
        alert("$" + (totalPrice - (totalPrice * 0.25)))
    } else if (luckyNumber === '3') {
        alert("$" + (totalPrice - (totalPrice * 0.35)))
    } else if (luckyNumber === '4') {
        alert("$" + (totalPrice - (totalPrice * 0.50)))
    } else if (luckyNumber === '5') {
        alert("Congratulations! Your cart is free today!")
    } else {
        alert("Sorry that is not a valid input!")
    }
}
calculateTotal(luckyNumber, totalPrice);
*/


/**
 *
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

/** completed exercise with class
const totalPrice = parseFloat(prompt("What is the price of your cart?"))
let luckyNumber = Math.floor(Math.random() * 6);
const discountedTotal = calculateTotal(luckyNumber, totalPrice);
alert(`Your lucky number is ${luckyNumber}\n\nThe total amount before discount is $${totalPrice}\n\nThe total amount after discount is $${discountedTotal}`);
*/

/** initial problem solve w if/else statements
function calculateTotal (luckyNumber, totalPrice) {
    if (luckyNumber === 0) {
        alert(`Your lucky number is ${luckyNumber}.`)
        alert(`Sorry! No discount will be applied to your cart.$ ${totalPrice} is your total.`)
    } else if (luckyNumber === 1) {
        alert(`Your lucky number is ${luckyNumber}`)
        alert((`Your total before discount was $${totalPrice}. Your total after the 10% discount is $${totalPrice - (totalPrice * 0.10)}.`))
    } else if (luckyNumber === 2) {
        alert(`Your lucky number is ${luckyNumber}`)
        alert((`Your total before discount was $${totalPrice}. Your total after the 25% discount is $${totalPrice - (totalPrice * 0.25)}.`))
    } else if (luckyNumber === 3) {
        alert(`Your lucky number is ${luckyNumber}`)
        alert((`Your total before discount was $${totalPrice}. Your total after the 35% discount is $${totalPrice - (totalPrice * 0.35)}.`))
    } else if (luckyNumber === 4) {
        alert(`Your lucky number is ${luckyNumber}`)
        alert((`Your total before discount was $${totalPrice}. Your total after the 50% discount is $${totalPrice - (totalPrice * 0.50)}.`))
    } else if (luckyNumber === 5) {
        alert(`Your lucky number is ${luckyNumber}`)
        alert(("Your total before discount was $ " + totalPrice) + ". After discount, your cart is free! Congratulations!")
    } else {
        alert("Sorry that is not a valid input!")
    }
}
calculateTotal(luckyNumber, totalPrice);
*/

/**
 *
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

/** initial solution with additional factors
const confirmEnterANumber = confirm("Would you like to enter a number?")
if (confirmEnterANumber === true) {
   let enterANumber = parseInt(prompt("What number are you entering?"));
    analyzeTheNumber(enterANumber);
}
function analyzeTheNumber(enterANumber) {
    if (enterANumber % 2 > 0 || enterANumber % 2 < 0) {
        alert("Your number is odd!")
    } else {
        alert("Your number is even!")
    }
    if (enterANumber > 0) {
        alert("Your number is positive!")
    } else if (enterANumber < 0) {
        alert("Your number is negative!")
    } else if (enterANumber = 0) {
        alert("Your number is 0! It is not positive or negative!")
    } else {
        alert("You did not enter a number.")
    }
    alert("This is your number plus 100 = " + (parseInt(enterANumber) + 100))
}
*/

/**
Bonus 1
Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
- Catch any invalid inputs.
- Write the logic using if/else ifs and then refactor using a switch case
 */

/** if/else statement favorite day of the week
let dayOfTheWeek = prompt("What day of the week do you like best?")
function favoriteDayOfTheWeek (dayOfTheWeek) {
if (dayOfTheWeek == 'sunday') {
    alert("Sundays are rest days!");
} else if(dayOfTheWeek == 'monday') {
    alert("Monday?? Really? That's good for you!");
} else if(dayOfTheWeek == 'tuesday') {
    alert("Ok! That's a pretty good day!");
    } else if (dayOfTheWeek == 'wednesday') {
    alert("Interesting.. hump daaayy");
} else if (dayOfTheWeek == 'thursday') {
    alert("I can get jiggy with a thursday");
} else if (dayOfTheWeek == 'friday') {
    alert("Niiice. Friday's are pretty cool (:");
} else if (dayOfTheWeek == 'saturday') {
    alert("Saturday is the party day! I see you (;");
} else {
    alert("I don't know that day! Try a different day(:")
}
}
favoriteDayOfTheWeek(dayOfTheWeek);
 */

/**
let usersFavoriteDay = prompt("What day is your favorite day of the week?");
function favoriteDayOfTheWeekSwitch(usersFavoriteDay) {
    switch(usersFavoriteDay) {
        case 'sunday':
            return "wowwee I love sundays!";
        case 'monday':
            return "I thought people didn't like mondays!";
        case'tuesday':
            return "Not many people enter tuesday... ur special!";
        case 'wednesday':
            return "Wednesday is a good day, indeed!";
        case 'thursday':
            return "I also like thursdays every once in a while (:";
        case 'friday':
            return "I LOVE fridays!!!!!! party up!";
        case 'saturday':
            return "I also very much enjoy saturdays :D";
        default:
            return "Aw man, I didn't catch that! Refresh and enter a valid day of the week for a special message!";
    }
}
alert(favoriteDayOfTheWeekSwitch(usersFavoriteDay));
*/

/*
    Bonus 2
Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
- use an if/else
    - refactor to use a ternary operator
*/

//  if/else string or number
// let userInput = prompt("Type somethin in!");
//
// function isANumberOrNot(userInput) {
//     if(isNaN(userInput)=== true) {
//         return "You just typed in a string!"
//     } else {
//         return "You typed in a number!"
//     }
// }
// alert(isANumberOrNot(userInput));
//
//
// // Refactor last function into a ternary operator
//
// let userInput = prompt("type something in!")
// function isANumberOrNot(userInput) {
//     (isNaN(userInput)===true)? alert("you typed in a string!") :
//        alert("you typed in a number!");
// }
// isANumberOrNot(userInput);


/**
Bonus 3
Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
- account for any invalid user input
- case of input should not matter
- accept both abbreviations and full names of the months
*/
// //function prompts for a season
// const pickASeason = prompt("What is your favorite season?").toUpperCase();
// //funtion then alerts months available in that season
// //ask user to pick given month
// const springMonths = prompt("What is your favorite springtime month, March, April, or May?").toUpperCase();
//  function seasonalMonthMessage(pickASeason, pickAMonth) {
//     switch (pickASeason) {
//          case "SPRING":
//              console.log(springMonths);
//              switch (springMonths) {
//                  case "MARCH":
//                      return "What a beautiful month! Spring begins!"
//                  case "APRIL":
//                      return "April showers! Growing time!"
//                  case "MAY":
//                      return "May bloom! Super blooms everywhere!"
//              }
//          case "SUMMER":
//              prompt()
//      }}
// seasonalMonthMessage(pickASeason, pickAMonth);



//the month chosen alerts special message for month
//has return statement for invalid response
//casing doesn't matter
//accept abbreviations and full names of month

/**
GOLD STAR BONUS

Create a distance unit conversion application.
    Prompt the user for unit of measurement.
    Prompt the user for a value.

    Prompt the user for a second unit of measurement to convert to.

    Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches

Use these conversion functions to make the correct unit conversion

Potentially, you will need a large switch case to account for the possible unit conversions,
    i.e. what conversion functions will need to be called in and in what order.

    DOUBLE GOLD STAR BONUS

    Allow unit conversion to metric system units

 */

// Make a function named isOdd(number)
// function isOdd(number) {
//     if (number % 2 ===1) {
//         return "This number is odd!"
//     } else {
//         return "This number is even!"
//     }
// }
//
// console.log(isOdd(5), "odd");
// console.log(isOdd(2), "even");
// console.log(isOdd(19038), "even");
// console.log(isOdd(4903921), "odd");


// Make a function named isEven(number)
// function isEven(number) {
//     if(number % 2 === 0) {
//     return `${number} is an even number!`
//     } else {
//         return `${number} is an odd number!`
//     }
// }
//
// console.log(isEven(2), "even");
// console.log(isEven(5), "odd");
// console.log(isEven(-14), "even");
// console.log(isEven(7555), "odd");

// Make a function named identity(input) that returns the input exactly as provided.
// function identity(input) {
//     return input;
// }
//
// console.log(identity("hello"));;
// console.log(identity(5));
// console.log(identity("15"));

//     Make a function named isFive(input)
// function isFive(input) {
//     return input;
// }
// console.log(isFive(5), 5);
// console.log(isFive(23), 5);

// Make a function named addFive(input) that adds five to some input.
// function addFive(input) {
//     return input + 5
// }
//
// console.log(addFive(1), 6);
// console.log(addFive(8), 13);
// console.log(addFive(84032), 84037);

// Make a function named isMultipleOfFive(input)
// function isMultipleOfFive(input) {
//     if (input % 5 === 0) {
//         return `${input} is a multiple of five!`;
//     } else {
//         return `${input} is not a multiple of five`;
//     }
// }
//
// console.log(isMultipleOfFive(5), 'is multiple');
// console.log(isMultipleOfFive(14), 'is not multiple');
// console.log(isMultipleOfFive(-876250), 'is multiple of five');
//
// // Make a function named isThree(input)
// function isThree(input) {
//     return 3;
// }
//
// console.log(isThree(3), 3);
// console.log(isThree(5), 3);

// Make a function named isMultipleOfThree(input)
// function isMultipleOfThree(input) {
//     if (input % 3 === 0) {
//         return `${input} is a multiple of 3!`;
//     } else {
//         return `${input} is not a multiple of 3`;
//     }
// }
//
// console.log(isMultipleOfThree(9), 'is multiple');
// console.log(isMultipleOfThree(80), 'is not multiple');
// console.log(isMultipleOfThree(-333), 'is multiple');
// console.log(isMultipleOfThree('hello'), 'is not multiple');

// Make a function named isMultipleOfThreeAndFive(input)
// function isMultipleOfThreeAndFive(input) {
//     if (input % 3 === 0 && input % 5 === 0) {
//         return `${input} is a multiple of both 3 and 5!`;
//     } else {
//         return`${input} is NOT a multiple of both 3 and 5!`;
//     }
// }
//
// console.log(isMultipleOfThreeAndFive(15), 'is multiple');
// console.log(isMultipleOfThreeAndFive(8403), 'is NOT multiple');
// console.log(isMultipleOfThreeAndFive(-150), 'is multiple');
// console.log(isMultipleOfThreeAndFive('hello'), 'is NOT multiple');

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function isMultipleOf(target, n) {
//     if(target % n === 0) {
//         return `${target} is evenly divisible by ${n}!`;
//     } else {
//         return `${target} is not evenly divisible by ${n}`;
//     }
// }
//
// console.log(isMultipleOf(100, 5), 'is divisible');
// console.log(isMultipleOf(23, 2), 'is NOT divisble');
// console.log(isMultipleOf(-55, 3), 'is NOT divisible');
// console.log(isMultipleOf('hello', 3), 'is NOT divisible');

// Make a function named isTrue(boolean)
// function isTrue(boolean) {
//     return true
// }
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue('hello'));

// Make a function named isFalse(boolean)
// function isFalse(boolean) {
//     return false
// }
// console.log(isFalse(false));
// console.log(isFalse('hello'));
// console.log(isFalse(3));

// Make a function named isTruthy(input), remember that values other than true will behave like true
// function isTruthy(input) {
//     return true
// }
//
// console.log(isTruthy(true));
// console.log(isTruthy('what'));
// console.log(isTruthy(false));

// Make a function named isFalsy(input), remember that values other than false behave like false
// function isFalsy(input) {
//     return false
// }
//
// console.log(isFalsy(false));
// console.log(isFalsy('hi'));
// console.log(isFalsy(2));
// console.log(isFalsy(true));

// Make a function named isVowel(letter)
// const vowels =['a', 'e', 'i', 'o', 'u']
// function isVowel(letter) {
//     if (vowels.includes(letter)) {
//         return `${letter} is a vowel!`
//     } else {
//         return 'This is not a vowel!'
//     }
// }
//
// console.log(isVowel('a'));
// console.log(isVowel('l'));
// console.log(isVowel('o'));
// console.log(isVowel(7));
// console.log(isVowel('A'));

// Make a function named isConsonant(letter)
// function isConsonant(letter) {
//     if(!vowels.includes(letter)) {
//         return `${letter} is a consonant!`;
//     } else {
//         return `${letter} is not a consonant.`;
//     }
// }
//
// console.log(isConsonant('s'));
// console.log(isConsonant('a'));


// Make a function named isCapital(letter)
// function isCapital(letter) {
//     if(/[A-Z]/.test(letter)) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(isCapital('K'));
// console.log(isCapital('l'));

// Make a function named isLowerCase(letter)
// function isLowerCase(letter) {
//     if(/[a-z]/.test(letter)) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(isLowerCase('j'));
// console.log(isLowerCase('A'));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if the input is not zero
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named trim(string) that removes empty spaces before and after the input.
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//     Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
//     Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())
//
//     Make a function called sayHowdy() which console.logs the string “Howdy!”
//
// Test this function by directly calling sayHowdy()
//
// Remember this function does not need a defined return value
//
// Make a function called returnName() that returns the string of your name
//
// Test this function with console.log(returnName())
//
//     Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
//
//     Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
//
//     Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
//
//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
//
// Write a function called first(input) that returns the first character in the provided string.
//
//     Write a function called last(input) that returns the last character of a string
//
// Write a function called rest(input) that returns everything but the first character of a string.
//
//     Write a function called reverse(input) that takes a string and returns it reversed.
//
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
//     Write a function called count(input) that takes in a string and returns the number of characters.
//
//     Write a function called add(a, b) that returns the sum of a and b
//
// Write a function called subtract(a, b) that return the difference between the two inputs.
//
//     Write multiply(a, b) function that returns the product
//
// Write a divide(numerator, denominator) function that returns a divided by b
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
//
// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
//
//     Create a function that takes in two string inputs.
//
//     If the second string input is present in the first, return the first input string with the second input string removed from it.
//     If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
//     If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
//
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiement passing in different functions.
//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.