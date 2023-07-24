// USING THE ASYNC/AWAIT SYNTAX TO RESOLVE PROMISES
// Remember, it's just syntactic sugar!
// In the end, it's doing the same thing as the .then() method
// WRITE CODE THAT WORKS!!!

//traditional declaration
// async function getFilm(url){
//
// }


// with arrow declaration, goes before parameter.
const getFilm = async (url) => {
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}
const getPerson = async(id=1) => {
    try {
        const url = `https://swapi.dev/api/people/${id}`
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(url, options);
        const person = await response.json();
        return person;
    } catch(error){
        console.log(error);
    }
}



//COMPLETED AND FUNCTIONAL: GETS THE FIRST PAGE OF CHARACTERS FROM SWAPI
//USING ASYNC AND AWAIT
const getPeople = async()=> {
    try{
    const url = 'https://swapi.dev/api/people/';
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(url, options);
    const people = await response.json();
    return people;
} catch(error){
    console.log(error);
}}

// USER SEARCH INPUT ASYNC
const searchForChar = async(userSearch) => {
    try{
        const url= `https://swapi.dev/api/people/?search=${userSearch}`
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
        const searchResponse = await fetch(url, options);
        const responseResult = await searchResponse.json();
        return responseResult;
    } catch(error){
        console.log(error);
    }
}
// END OF USER SEARCH INPUT ASYNC

//if you async the WHOLE IIFE, will still work! Puts everything within IIFE into .then() for you!
(async()=> {
    //START OF AWAIT TO PRINT EACH PERSON IN THEIR OWN ROW
    const data = await getPeople();
    //data object
    console.log(data);
    //look thru object and found people objects
    let people = data.results;
    console.log(people);

    // CREATE ROWS ON HTML TO PRINT PERSON INFO WITH MAP METHOD
    const peopleRows = people.map((person)=> {
const row = document.createElement('tr');
row.innerHTML =
    `
      <td>
            <div class="d-flex gap-10 align-center column">
                   <img class="character-image" src="https://via.placeholder.com/50x50/"/>
                       <p class="character-name">${person.name}</p>
            </div>
                    </td>
               <td>${person.height}</td>
               <td>${person.mass}</td>
               <td>${person.hair_color}</td>
               <td>${person.skin_color}</td>
               <td>${person.eye_color}</td>
               <td>${person.birth_year}</td>
               <td>${person.gender}</td>
               <td><button>Remove</button></td>
    `
        let button =row.querySelector('button');
button.addEventListener('click', ()=>{
    row.remove();
});
        return row;
    });
    for (let person of peopleRows){
        document.querySelector('#characters tbody').appendChild(person);
    }
// END OF FUNCTIONS TO PRINT PERSON INFO IN HTML


    //BEGIN USER SEARCH FUNCTIONALITY (works if replace argument with string of character name i.e. 'luke'
    const searchForCharacter = await searchForChar(userSearchBox);
    console.log(searchForCharacter.results[0]);

   //  //START OF SEARCH BAR FUNCTIONALITY
    function userSearchBox() {
        //find the search box where user is inputting character name
        let userSearchInput = document.querySelector('#search-input');
        //listen to the search box being filled in by user
        userSearchInput.addEventListener('input', (e) => {
            //prevents default behavior while in the search box
            e.preventDefault();
            //stores user search input into a string
            let userSearchInput = "";
            //converts user search value in search box to a lowercase string
            let userSearchValue = userSearchInput.value.toLowerCase();
            //pushes the lowercase user search value to string
            userSearchInput.push(userSearchValue);
        });
    }


    //Print Luke Skywalker info on HTML Table lol LONG WAY
   //  const luke = await getPerson(1);
   //  let table = document.querySelector('#characters');
   //  let tableRow = table.insertRow(1);
   //  let lukeName = tableRow.insertCell(0);
   //  lukeName.innerHTML = `Name: ${luke.name}`;
   //  let lukeHeight = tableRow.insertCell(1);
   //  lukeHeight.innerHTML = `${luke.height} cm`;
   //  let lukeMass = tableRow.insertCell(2);
   //  lukeMass.innerHTML = `${luke.mass} kg`;
   //  let lukeHair = tableRow.insertCell(3);
   //  lukeHair.innerHTML = `Hair: ${luke.hair_color}`;
   //  let lukeSkin = tableRow.insertCell(4);
   //  lukeSkin.innerHTML = `Skin: ${luke.skin_color}`;
   //  let lukeEye = tableRow.insertCell(5);
   //  lukeEye.innerHTML = `Eyes: ${luke.eye_color}`;
   //  let lukeBirthYear = tableRow.insertCell(6);
   //  lukeBirthYear.innerHTML =`Year born: ${luke.birth_year}`;
   // let lukeGender = tableRow.insertCell(7);
   // lukeGender.innerHTML = `Gender: ${luke.gender}`;
   //  const firstFilm = await getFilm(luke.films[0]);

//console logs the first film luke skywalker was in
    // console.log(firstFilm);


    //if not declaring IIFE as async function
// getFilm('https://swapi.dev/api/films/1').then(film=> {
//     console.log(film);
// })


})();