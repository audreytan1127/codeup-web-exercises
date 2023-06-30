"use strict";

// https://developer.mozilla.org/en-US/docs/Web/Events

// ==========================  Simple Example

// When a user clicks the test button, log "test" in the console. (with pre-built function or anon function)

//First solution

// const testBtn = document.getElementById('test-btn');
// testBtn.addEventListener('mouseover', () => {
//     console.log('test');
// });


//Solution as function

// const testBtn = document.getElementById('test-btn');
// function logTest () {
//     console.log('test');
// }
// testBtn.addEventListener('mouseover', logTest);


// remove event listener

// testBtn.removeEventListener("mouseover", logTest);



// ==========================  Register Additional Events

 // When a cursor hovers over the h1, change the text color, font-family, and make larger.
 //    1.  target the node

 //    const h1 = document.getElementsByTagName('h1')[0];


//    3.  in listener change styling for paragraph

// function changeStyle() {
//     h1.style.color = 'red';
//     h1.style.fontFamily = 'fantasy';
//     h1.style.fontSize = '10em';
// }
//

//    2.  add event listener for mouseover event to target

// h1.addEventListener('mouseover', changeStyle);


// When double-clicking the restore text button, make the h1 font size 2em

// const textBtn = document.getElementById('shrink-btn');
// textBtn.addEventListener('dblclick', () => {
//     h1.style.fontSize = '2em';
// });


// ==========================  Event Object

// document.addEventListener("click", (e) => {
//    console.log(e);
// });

//Changes background color whenever you click somewhere on the screen
// document.addEventListener("click", (e) => {
//
//    let red = e.screenX % 256;
//    let green = e.screenY % 256;
//    let blue = "ff";
//
//    console.log(e.screenX);
//    console.log(e.screenY);
//
//    red = red.toString(16);
//    green = green.toString(16);
//
//    document.body.style['background-color'] = "#" + red + green + blue;
//
// });

// ==========================  Keyboard Events and Prevent Default

// document.addEventListener("keypress", (e) => {
//     console.log(e.code);
//     if (e.code === "Space") {
//         alert('HELLO!');
//         // e.preventDefault();
//     }
// });


// ==========================  e.target

// *** see additional example