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

/** if/else string or number
let userInput = prompt("Type somethin in!");

function isANumberOrNot(userInput) {
    if(isNaN(userInput)=== true) {
        return "You just typed in a string!"
    } else {
        return "You typed in a number!"
    }
}
alert(isANumberOrNot(userInput));
*/



/**
Bonus 3
Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
- account for any invalid user input
- case of input should not matter
- accept both abbreviations and full names of the months


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