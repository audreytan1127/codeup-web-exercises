// console.log("the iterating js file is connected!");
"use strict"

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
// const names = ["audrey", "bekah", "emily", "mary"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
// console.log([names.length - 1]);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    //using arrow function in for each
// names.forEach(() => {
//     console.log(name);
// });

//audrey's solution
    // names.forEach(function(name, index, originalArr) {
    //     console.log(originalArr);
    //     console.log(`${name} has an index of ${index}.`);
    // });

// for of loop
// for (const name of names) {
//     console.log(name);
// }
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

// function first(arr) {
//     console.log(arr[0]);
//     }
//
// function second(arr) {
//     console.log(arr[1]);
// }
// function last(arr) {
//
//     console.log(arr[3]);
// }
// first([1, 2, 3, 4, 5]);
// second([1, 2, 3, 4, 5]);
// last([1, 2, 3, 4, 5]);


// Additional Array Exercises!!
// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.

    // Given:
// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//     function allIndexesOf(fruits, specificFruit) {
//         console.log(`The fruit you are searching for is ${specificFruit}`);
//         console.log([fruits.length, fruits.indexOf(specificFruit)]);
//     }
//
// console.log(allIndexesOf(fruits,"apple"));
// console.log(allIndexesOf(fruits,"guava"));
// console.log(allIndexesOf(fruits, "pineapple"));

// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]


// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
//
// Given:
//
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.
//     Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.
//     Make a function called coinFlip() that returns either 0 or 1, randomly
// Make a function called twoDice() that returns the sum of rolling two six sided dice.
//     Make a function called twentySidedDie() that returns a random integer between 1 and 20.
// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
// Make a function called tetrahedron() that returns a random integer between 1 and 4.
// Make a function called rollDie() that returns an integer between 1 and 6.
// Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.
//
// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
//
// This function should take in two arguments:
//
//     The first argument is the number of rolls you want to make.
//     The second argument is a function that contains the function definition for the type of die you want to roll.
//     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.
//
