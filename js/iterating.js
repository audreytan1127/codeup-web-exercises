console.log("the iterating js file is connected!");
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
