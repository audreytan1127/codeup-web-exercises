// JS function alerts when the page finishes loading.
// window.onload = function() {
//     alert("The window has loaded");
// }

//jQuery alerts when page finishes loading
// $(function() {
//     alert("The window has loaded.");
// });

//jQuery arrow function
// $(()=> {
//     alert("Window has loaded!");
// });

//jQuery select id to change css
// $(() => {
//     $('#id-container').css('background-color', 'red');
// });
//
// // jQuery class selector
// $(".title").css('color', 'purple');
//
// //vanilla JS query select all title classes
// let titleElements = document.querySelectorAll('.title');
// titleElements.forEach(titleElements => {
// titleElements.style.color = "blue";
// });
//
// //jQuery to select and change all li elements
// $('li').css('color', 'pink');
//
// //multiple selectors jQuery
// $('h1, p, .highlight').css('font-weight', 'bold');
//
// //all selectors jQuery
// $('*')
//     .css('outline', '1px solid lightblue')
//     .css('font-weight', 'bold');

// ID jQuery Exercise
// let paragraph1Content = $('#paragraph1').html();
// alert(paragraph1Content);

// Classes jQuery Exercise
// $('.codeup').css('border', '1px solid red');

//Element jQuery Exercise
// $('li').css('font-size', '20px');
// let h1Alert = $('h1').html();
// alert(h1Alert);

//Multiple selectors jQuery Exercise
// $('h1, p, li').css('background-color', 'yellow');

//jQuery event listeners
// $(() => {
//     $('h1').on('click',function() {
//         console.log("h1 was clicked");
//     });
//
//     $('h2').on('click', function() {
//         //changes all h2's
//         // $('h2').css('text-decoration', 'underline');
//
//         //changes only the h2 that was clicked
//
//         $(this).css('text-decoration', 'underline');
//     })
//         //can chain event listeners and their functions
//         .on('dblclick', function() {
//             $(this).css('text-decoration', 'none');
//         })
// });

//best way to declare multiple event listeners in jQuery thru creating functions
// function underlineThis(e) {
//     $(e.target).css('text-decoration', 'underline');
// }
// function noUnderlineThis(e) {
//     $(e.target).css('text-decoration', 'none');
// }
// function changeToPointer(e) {
//     $(e.target).css('cursor', 'pointer');
// }
// function changeToDefault(e) {
//     $(e.target).css('cursor', 'default');
// }
// $('h2')
//     .on('click', underlineThis)
//     .on('dblclick', noUnderlineThis)
//     .on('mouseenter', changeToPointer)
// .on('mouseleave', changeToDefault);


// jQuery mouse event listener exercise
//using arrow function class walk-thru
// $('h1').on('click', (e) => {
//     $(e.target).css('background-color', 'blue');
// });
//ALL of the paragraphs will change when ONE is double clicked with this arrow function
// $('p').on('dblclick', () => {
//     $('p').css('font-size', '18px');
// });
// arrow function to change the color of li
// $('li').on('mouseenter', (e) => {
//     $(e.target).css('color', 'red');
// });
// $('li').on('mouseleave', (e) => {
//     $(e.target).css('color', 'black');
// });

//audrey's solution
// function backgroundColorChange(e) {
//     $(e.target).css('background-color', 'pink');
// }
// function paragraphTextSize(k){
//     $(k.target).css('font-size', '18px');
// }
// function liChangeToRed(l) {
//     $(l.target).css('color', 'red');
// }
// function liChangeToBlack(m) {
//     $(m.target).css('color', 'black');
// }
// $('h1').on('click', backgroundColorChange)
// $('p').on('dblclick', paragraphTextSize)
// $('li').on('mouseover', liChangeToRed)
// $('li').on('mouseleave', liChangeToBlack);
