var num_00 = document.querySelector(".button_00");
var num_01 = document.querySelector(".button_01");
var num_02 = document.querySelector(".button_02");
var num_03 = document.querySelector(".button_03");
var num_04 = document.querySelector(".button_04");
var num_05 = document.querySelector(".button_05");
var num_06 = document.querySelector(".button_06");
var num_07 = document.querySelector(".button_07");
var num_08 = document.querySelector(".button_08");
var num_09 = document.querySelector(".button_09");
var plus_sign = document.querySelector(".button_plus");
var minus_sign = document.querySelector(".button_minus");
var multiplication_sign = document.querySelector(".button_multiply");
var division_sign = document.querySelector(".button_divide");
var equals_sign = document.querySelector(".button_equals");
var decimal = document.querySelector(".button_decimal");
var clear = document.querySelector(".button_clear");
var answer_box = document.querySelector(".answer_box");

var myEntry = new Array();
var myEntry = [];

var numberThatIsSavedToArrayGlobal;

//Adding, Subtracting, Multiplying, Dividing
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}





function addNumbers() {

}

// function subtrackNumbers() {
//
// }
//
// function multiply() {
//
// }
//
// function divideBy(number){
//   function check(x) {
//     return x % number ==== 0);
//   }
//   return check;
// }
//
// function equals() {
//
// }


//This clears the answer box
function startOver() {
  myEntry = [];
  answer_box.innerHTML = " ";
}


//This function stores the numbers and symbols and converts it to a string
// and puts it in the answer box
function clickHandler() {
//This puts the number into an array and stores it
  myEntry.push(this.innerText);
//This converts string to number, and removes all the commas and spaces
  numberThatIsSavedToArray = parseFloat(myEntry.join(''));
//This puts the number in the answer box
  answer_box.innerHTML = numberThatIsSavedToArray;
  numberThatIsSavedToArrayGlobal = numberThatIsSavedToArray;
  console.log(numberThatIsSavedToArray);
}


//These are event listeners for each button

num_00.addEventListener("click", clickHandler);

num_01.addEventListener("click", clickHandler);

num_02.addEventListener("click", clickHandler);

num_03.addEventListener("click", clickHandler);

num_04.addEventListener("click", clickHandler);

num_05.addEventListener("click", clickHandler);

num_06.addEventListener("click", clickHandler);

num_07.addEventListener("click", clickHandler);

num_08.addEventListener("click", clickHandler);

num_09.addEventListener("click", clickHandler);

plus_sign.addEventListener("click", clickHandler);

minus_sign.addEventListener("click", clickHandler);

multiplication_sign.addEventListener("click", clickHandler);

division_sign.addEventListener("click", clickHandler);

decimal.addEventListener("click", clickHandler);

equals_sign.addEventListener("click", clickHandler);

clear.addEventListener("click", startOver);















//
// //random color generator
// function rainbow(numOfSteps, step) {
//     // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distiguishable vibrant markers in Google Maps and other apps.
//     // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
//     // Adam Cole, 2011-Sept-14
//     var r, g, b;
//     var h = step / numOfSteps;
//     var i = ~~(h * 6);
//     var f = h * 6 - i;
//     var q = 1 - f;
//     switch(i % 6){
//         case 0: r = 1, g = f, b = 0; break;
//         case 1: r = q, g = 1, b = 0; break;
//         case 2: r = 0, g = 1, b = f; break;
//         case 3: r = 0, g = q, b = 1; break;
//         case 4: r = f, g = 0, b = 1; break;
//         case 5: r = 1, g = 0, b = q; break;
//     }
//     var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
//     return (c);
//
//
//     //Set the total number of unique markers/colours
// var countOfColors = 50;
//
// //Cycle through rainbow
// function cycleRainbow() {
// for (var i = 0; i < 50; i++) {
//   document.querySelector(".div").style.backgroundColor = (rainbow, 50);
// }
