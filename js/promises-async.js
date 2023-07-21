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

const getPeople = async()=> {
    const url = 'https://swapi.dev/api/people/';
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'applicaiton/json'
        }
    }
    const response = await fetch(url, options);
    const people = await response.json();
    return people;
}
//if you async the WHOLE IIFE, will still work! Puts everything within IIFE into .then() for you!
(async()=> {
    const data = await getPeople();
    //data object
    console.log(data);
    //look thru object and found people objects
    let people = data.results;
    console.log(people);
    const peopleRows = people.map((person)=> {
const row = document.createElement('tr');
row.innerHTML =
    `
      <td>
            <div class="d-flex gap-10 align-center">
                   <img class="character-image" src="https://via.placeholder.com/50x50/"/>
                       <p class="character-name"></p>
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