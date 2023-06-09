
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);


    //  * TODO:
    //  * Create a string with <br> tags between each planet. console.log() your
    //  * results. Why might this be useful?
    //  *

    //solution
//     const planetBreak = planetsArray.join('<br/>')
// console.log(planetBreak);

//  * BONUS:
    //  * Create another string that would display your planets in an unordered
    //  * list. You will need an opening AND closing <ul> tags around the entire
    //  * string, and <li> tags around each planet.

    // Cesar's arrow function solution
const unorderedPlanetList = (arr) => {
    let planetStringB = arr.join(`</li><li>`);
    console.log(planetStringB);
    return `<ul><li>${planetStringB}</li></ul>`;
};
console.log(unorderedPlanetList(planetsArray));
