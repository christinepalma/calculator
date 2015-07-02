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

//This does the math
function getAnswer() {
  var answer = eval;
  console.log(answer(numberThatIsSavedToArrayGlobal));
  answer_box.innerHTML = (answer(numberThatIsSavedToArrayGlobal));
  }

function styleAnswerBox() {

}


//This clears the answer box
function startOver() {
  myEntry = [];
  answer_box.innerHTML = " ";
}


//This function stores the numbers and symbols and converts it to a string
// and puts it in the answer box
function clickHandler() {
//This puts the number, decimal or operator into an array and stores it
  myEntry.push(this.innerText);
//This converts string to number, and removes all the commas and spaces
  // numberThatIsSavedToArray = parseFloat(myEntry.join(''));
  // numberThatIsSavedToArray = (myEntry.join(''));
  // console.log(myEntry.valueOf())
  numberThatIsSavedToArray = (myEntry.join(''));
//This puts the number in the answer box without commas or spaces
  answer_box.innerHTML = numberThatIsSavedToArray;
//This removes the x and replaces it with * for multiplication
var str = numberThatIsSavedToArray;
var numberThatIsSavedToArrayNew = str.replace("x", "*");
//This stores the string globally
  numberThatIsSavedToArrayGlobal = numberThatIsSavedToArrayNew;
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

equals_sign.addEventListener("click", getAnswer);

clear.addEventListener("click", startOver);
