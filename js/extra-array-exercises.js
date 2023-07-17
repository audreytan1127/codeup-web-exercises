"use strict"
// /**
//  * JS Array Practice
//  * Intermediate Array practice: array creation, iteration, and manipulation
//  */

//Array for Exercise 0 thru 3.1
let array1 = ['hello', 'hi', 'hey', 'ni hao', 'konichiwa'];

// Exercise 0. Write a function named first() that returns only the first element of an array
// function first([array1]) {
//     console.log(array1[0]);
// }
// first([array1]);


// Exercise 1. Write a function named secondToLast() that returns the second to last element
// function secondToLast(array1) {
//     return array1[array1.length-2];
// }
// console.log(secondToLast(array1));


// Exercise 2. Write a function named rest() that takes in an array and returns an array containing everything except the first element.
// function rest(array1) {
//     //create new array constant to print array without the first item
//     let arrayHello = [];
//     //this is the counter for array items being placed into the new array constant---arrayHello
//     let x = 0
//     for (let i = 1; i < array1.length; i += 1) {
//         arrayHello[x] = array1[i];
//         //will continue to add items from array, if not added, will only print last item of array
//         x++;
//     } return arrayHello;
// }
// console.log(rest(array1));


// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
// let longestLength = 0
// let longestString = '';
// function getLongestString(array1) {
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i].length > longestLength) {
//             let longestLength = array1[i].length;
//         longestString = array1[i];
//
//         }
//     } return longestString;
// }
//
// console.log(getLongestString(array1));

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

//create function getShortestString
// function getShortestString(arr) {
//     //create variable to compare the length of an item in array to a longer string (infinity)
//     let shortLength = Infinity;
//     //create variable to store the item in array that is being compared by for loop
//     let shortest = "";
// //conditional statement to check if the array item is longer than 0
//     if (arr.length > 0) {
//         //for loop to go through array one by one
//         for (let i = 0; i < arr.length; i++) {
//             //another conditional statement which holds a guard clause of the array item having to be a string.
//             //AND the item of the array has to be shorter than the infinity.
//             if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
//                 //if these conditions were passed, the array item will then be placed into the variable (shortest)
//                 shortest = arr[i];
//                 //then the shortLength variable will be set equal to the array item length
//                 shortLength = arr[i].length;
//                 //the loop will continue through the array and set each item length equal to each other.
//                 //if the length of the next item is shorter than the last, it will replace the item  and continue through the loop until the length of the array has been traversed.
//             }
//         }
//     }
// //the variable which is deemed the shortest in length will be returned
//     return shortest;
// }
//
// //the variable output is set equal to the funtion with array1 passing through as argument.
// let output = getShortestString(array1);
// //the output is console logged, printing the shortest length item in array
// console.log(output);


// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]



