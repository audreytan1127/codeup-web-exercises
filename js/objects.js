
    "use strict";
//Audrey example: guitar play will not process.
//     const guitar = [
//         {
//             make: "Schecter",
//             model: "Omen 6 Diamond Series",
//             bodyStyle: ["Blues", "big body"],
//             bodyColor: {
//                 finish: "glossy",
//                 paint: "translucent turtle gray",
//             },
//             fretStyle: "Celtic cross inlay",
//             pickups: "EMG 81's",
//             strings: "Eddie Ball Regular Slinky",
//             play() {
//                 console.log(`${this.model} Guitar playing`);
//             }
//         }
//     ]
//     console.log(guitar[0].bodyStyle[1]);
//     guitar.play();
//     console.log(guitar.bodyColor.finish);
//     console.log(guitar.strings);

    // const person = {};
    // person.firstName = 'Steve';
    // person.lastName = 'Pflug';
    //
    // console.log(person);

    //or

    // const person = {
    //     firstName: 'Steve',
    //     lastName: 'Pflug',
    // }
    // console.log(person);

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // const person = {
    //     firstName: "Audrey",
    //     lastName: "Tan",
    //     sayHello() {
    //         console.log(`Hello ${person.firstName} ${person.lastName}!`);
    //     },
    // };
    // console.log(person.firstName);
    // console.log(person.lastName);
    // person.sayHello();

    // person.sayHello = function() {
    //     return `Hello from ${person.firstName} ${this.lastName}`
    // }
    // console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
//
//     let shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320},
// ]
// Audrey solution
    // shoppers.forEach(function(shopper , i, originalArray) {
    //     const shopperDiscount = (shoppers[i].amount * 0.88).toFixed(2);
    //     if(shoppers[i].amount > 200) {
    //         console.log(`${shoppers[i].name} has a total of $${shoppers[i].amount}! The 12% discount took off $${shoppers[i].amount *0.12}. After a 12% discount the new total is $${shopperDiscount}.`);
    //     } else {
    //         console.log(`Sorry ${shoppers[i].name} did not qualify for the discount because their total $${shoppers[i].amount} is not more than $200!`);
    //     }
    // });


//Class walk thru
//     shoppers.forEach((shopper) => {

    // declare variable w conditionals
//         // console.log(`${shopper.name} spent ${shopper.amount}. Your total after discount is: ${shopper.amount > 200 ? "You got the discount! Your total is: "+ shopper.amount}`);
//         let name = shopper.name
//         let amount = (shopper.amount).toFixed(2)
//         let discount = (shopper.amount).toFixed(2) * 0.12
//         let discountedAmount = (shopper.amount).toFixed(2) * 0.88
//         if(shopper.amount > 200) {
//             console.log(`${name} spent $${amount}. You got the discount! You just saved: $${discount}. Your new total is: $${discountedAmount}`);
//         } else {
//             console.log(`${name} spent $${amount}. You did not get the discount! Your total is: $${amount}`);

    //conditional walk thru
        // if(shopper.amount > 200) {
        //     console.log(`${shopper.name} spent $${shopper.amount.toFixed(2)}. You got the discount! You just saved: $${shopper.amount * 0.12}. Your new total is: $${shopper.amount.toFixed(2) * 0.88}`);
        // } else {
        //     console.log(`${shopper.name} spent $${shopper.amount.toFixed(2)}. You did not get the discount! Your total is: $${shopper.amount.toFixed(2)}`);

    //     }
    // })
//
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
//audrey's books
// const books = [
//     {title: "Atomic Habits", author: {firstName: "James", lastName: "Clear"}},
//         {title: "The Body Keeps The Score", author: {firstName: "Bessel", lastName: "Van der Kolk"}},
//         {title: "Lord Of The Rings", author: {firstName: "JRR", lastName: "Tolkien"}},
//         {title: "The Shining", author: {firstName: "Stephen", lastName: "King"}},
//         {title: "Twilight", author: {firstName: "Stephenie", lastName:"Meyer"}}
//     ];

    // console.log(books);
    // console.log(books[0].author.lastName);
    // console.log(books[1].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// audrey solution
// for (let i = 0; i < books.length; i++) {
//     console.log(`Book # ${i + 1}`);
//     console.log(`Title: ${books[i].title}`);
//     console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
//     console.log('----');
// }

    //Class Walk Thru
// books.forEach((book, index) =>  {
//     console.log(`Book # ${index +1}`);
//     console.log(`Title: ${book.title}`);
//         console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
//         if (index < books.length -1)
//             console.log('---');
//     });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    //Audrey Solution for createBook
//     function createBook(bookTitle, firstName, lastName) {
//        const book = {
//            bookTitle: prompt('Please enter a book title.'),
//            author: {
//                firstName: prompt('Please enter the author\'s first name.'),
//                lastName: prompt('Please enter the author\'s last name.')
//            }
//        };
//         console.log(book);
//     }
// createBook();


  //Class Walk Thru for createBook and showBookInfo
// function createBook(title, authorFirstName, authorLastName) {
//     return {title: title, author: {firstName: authorFirstName, lastName: authorLastName}
//     };
//     }
//     let books = [
//         createBook("Lord of the Rings", "J.R.R", "Tolkien"),
//     ];
// books.push(createBook("Twilight", "Stephanie", "Meyer"));
// function showBookInfo(book) {
//     console.log(`Title: ${book.title}`);
//     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
// }
// showBookInfo();