//  ////////Declare functions first even if outside of IIFE
//gave function parameter of id, now in url the api, person id will be switched to whatever is passed.
// //////////IN CLASS FETCH WALK THRU WITH STAR WARS API
// const getPerson = (id) => {
//     // Syntax for fetch method
//     // fetch(url, options);
//     const url = `https://swapi.dev/api/people/${id}`;
//     const options = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     }
//     return fetch(url, options).then((response) => {
//         return response.json();
//     })
//         .catch(error => {
//             console.log(error);
//         });
//     //unnecessary if we are using this function in our main method (the methods within IIFE)
//     // .then((data)=>{
//     //     console.log(data);
//     // });
// }
//
// const getFilm = (url) => {
//     //do another fetch for the film api call because it is another url inside the person object
//     const filmUrl = url;
//     const options = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     }
//     //another fetch request to find the first film data for luke
//     return fetch(url, options)
//         .then((response) => {
//             return response.json();
//         })
//         //to catch any errors that may happen when fetching data
//         .catch(error => {
//             //NOT ENOUGH JUST TO LOG ERROR (in real world app)
//             console.log(error);
//         });
//     //helps to contextually name it after console log the data set...
//     // but when putting data into a function, it is redundant to call the dataset when returning fetch.
//     //so this .then below is unnecessary.
//     //  .then((film)=> {
//     //      console.log(film);
//     //  });
// }

const getUserInfo = (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${GITHUB_TOKEN}`,
        }
    }
    return fetch(url, options)
        .then(response => response.json());
}

(() => { // IIFE (Immediately Invoked Function Expression)
    //IN CLASS WALK THRU WITH STAR WARS API
    // //call fetch method and pass in person 1 to the ID = Luke Skywalker
    // //this function getPerson is just a PROMISE, so we need to do another .then()
    // getPerson(1).then((person) => {
    //     console.log(person);
    //     //within the scope of the fetch method getting the person
    //     //call the function to fetch the first film [0] of this person.
    //     getFilm(person.films[0]).then((film) => {
    //         console.log(film);
    //     })
    // });



    // Create a function that accepts a GitHub username, and returns a promise that resolves returning
    // just the date of the last commit that user made.
    getUserInfo('audreytan1127').then((data)=>{
        //data comes back as an array of objects of the pushed data
        console.log(data);
        //data at index 0(the latest update) was made on this date at this time
        console.log(`Latest commit ${data[0].actor.login} made: ${data[0].created_at}`);
    })
})();