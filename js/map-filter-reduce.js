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

//use .filter to create array of user objects where each user has at least 3 languages in languages array.
const userLanguages = users.filter(user=> {
const userLanguageBank = user.languages;
return userLanguageBank.length >= 3;
});
console.log(userLanguages);

//Use .map to create an array of strings where each element is a user's email address

const userEmails = users.map((user)=>{
    const allUserEmails = `User Email is: ${user.email}`;
    return allUserEmails;
});
console.log(userEmails);


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



//Use .reduce to get the longest email from the list of users.

    let longestUserEmail = 0;
const longestEmail = users.reduce((accumulator, user, index)=>{
    if(longestUserEmail < user.email.length) {
        longestUserEmail = user.email.length;
        accumulator.totalCharacters = longestUserEmail;
        accumulator.userEmail = user.email;
    }
       return accumulator;
}, {
    totalCharacters: 0,
    userEmail: users[0].email
})
console.log(longestEmail);



//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const userNames = users.reduce((accumulator, user, index)=> {
    return index==0 ? user.name : accumulator + ', ' + user.name;
}, '');
console.log(userNames);


//BONUS REDUCE


