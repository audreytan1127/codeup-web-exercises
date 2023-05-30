"use strict"
alert("Welcome to my Website!");

let favoriteColor =prompt("What is your favorite color?");
alert(favoriteColor + " is my favorite color too!");

//movie rental prices
let littleMermaidDaysRented= prompt ("How many days did you rent Little Mermaid?");
let brotherBearDaysRented= prompt("How many days did you rent Brother Bear?");
let herculesDaysRented= prompt("How many days did you rent Hercules?");

let priceDollarsPerDayPerMovie= 3;

let totalPrice= ( parseInt(littleMermaidDaysRented) + parseInt(brotherBearDaysRented) + parseInt(herculesDaysRented)) * priceDollarsPerDayPerMovie
alert("Total Price for All Movies = $" + totalPrice);

//hourly rate to total payment for working
let googleHourlyRateDollars = 400;
let amazonHourlyRateDollars = 380;
let facebookHourlyRateDollars = 350;

let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let facebookHours = prompt("How many hours did you work for Facebook?");

let totalPayment;

totalPayment = parseInt(googleHours) * googleHourlyRateDollars;
totalPayment += parseInt(amazonHours) * amazonHourlyRateDollars;
totalPayment += parseInt(facebookHours) * facebookHourlyRateDollars;

alert("Your total payment for all jobs is $" + totalPayment)

//class enrollment
let classIsNotFull = confirm("Is this class not at full capacity?")
if (classIsNotFull === false) {
  alert ("Class is full! Please contact your advisor.");
}

let classScheduleDoesNotConflict= confirm("Is this class not in conflict with any of your other classes?")
if (classScheduleDoesNotConflict === false) {
    alert("There is a conflict in your class times, please contact your advisor.")
}
let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict
if (studentEnrolled === true) {
    alert("You have successfully enrolled in this class!")
} else {
    alert("You were unable to enroll in this class. Please contact your advisor or try a different time slot.")
}
//discount on cart
let isPremiumMember = confirm("Are you a premium member?")
if (isPremiumMember === true) {
    alert("You are a premium member! The discount has been applied to your cart")
} else {
    alert("Continue answering the other questions to potentially receive a discount on your cart.")
}
let numberOfItems = prompt("How many items do you have in your cart?")
if (numberOfItems >= 2) {
    alert("You have 2 or more items in your cart, please verify expiration date.")
} else {
    alert("The discount code is not applicable to carts with less than 2 items.Please add more items to your cart to receive discount.")
}
let offerIsValid = confirm("Is the two or more discount offer still valid?")
if (offerIsValid === true) {
    alert("The offer is still valid! The discount has been applied to your cart")}
    else {
        alert("The offer has expired. Please try a different code or checkout.")
    }
let productDiscountApplied = offerIsValid && (isPremiumMember || parseInt(numberOfItems) > 2);

if (productDiscountApplied === false) {
    alert("Discounts could not be applied to your cart. Please check requirements again.")
}
