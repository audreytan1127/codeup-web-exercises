const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// ////////////////EXERCISE 1
//use .filter to create array of user objects where each user has at least 3 languages in languages array.
const userLanguages = users.filter(user=> {
const userLanguageBank = user.languages;
return userLanguageBank.length >= 3;
});
console.log(userLanguages);

// ////////////////EXERCISE 2
//Use .map to create an array of strings where each element is a user's email address

const userEmails = users.map((user)=>{
    const allUserEmails = `User Email is: ${user.email}`;
    return allUserEmails;
});
console.log(userEmails);


// ////////////////EXERCISE 3
//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

//store the total amount of users in variable
let totalUsers = users.length;
//set the years of experience to 0 to add years of exp. each user has
let yearsOfExperience = 0;
// declare reduce method
const averageYears = users.reduce((accumulator, user, index)=>{
    // add each users years of experience to the counter
yearsOfExperience += user.yearsOfExperience;
//set the total years of experience of all users to the accumulator object value
        accumulator.totalYearsOfExperience = yearsOfExperience;
        //set the average years of experience users have to accumulator object
        accumulator.averageYearsOfExperience = yearsOfExperience / totalUsers;
        //return the accumulator object
        return accumulator;

    },
//set the accumulator object to store values to calculate average
    {
       totalYearsOfExperience: 0,
        averageYearsOfExperience: 0
    });
console.log(averageYears);


// ///////////////EXERCISE 4
//Use .reduce to get the longest email from the list of users.
//set the counter for the number of characters in the user email to 0
    let longestUserEmail = 0;
    //use reduce to find the longest email
const longestEmail = users.reduce((accumulator, user, index)=>{
    //check if all of the user email lengths are more than the longest user email
    if(longestUserEmail < user.email.length) {
        //set the longest user email length to the variable.
        longestUserEmail = user.email.length;
        // the email that is the longest will have the amount of characters placed into the accumulator property totalCharacters.
        accumulator.totalCharacters = longestUserEmail;
        //the email that is the longest will be printed into the accumulator property userEmail.
        accumulator.userEmail = user.email;
    }
    //return the accumulator value
       return accumulator;
}, {
    // declare the accumulator values to return from reduce function
    totalCharacters: 0,
    userEmail: users[0].email
})
// call function
console.log(longestEmail);


// ///////////////EXERCISE 5
//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const userNames = users.reduce((accumulator, user, index)=> {
    //if at the index 0 of the user.names doesn't have the user.name, add the user.name to the accumulator and separate with a comma.
    return index==0 ? user.name : accumulator + ', ' + user.name;
}, '');
console.log(userNames);


// ////////////////BONUS REDUCE
// Use .reduce to get the unique list of languages from the list of users.

const uniqueLanguages = users.reduce((accumulator, user) => {
    //for each of the languages in the user.languages,
    user.languages.forEach(language => {
        //check if the accumulator doesn't have that language
        if (!accumulator.includes(language)) {
            //if the accumulator doesn't have the language, push the language to the array
            accumulator.push(language);
        }
    });
    //return the accumulator array
    return accumulator;
}, []);
console.log(uniqueLanguages);