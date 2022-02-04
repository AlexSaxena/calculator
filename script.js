console.log("Hello there!\nGeneral Kenobi!");

let btnSlash = document.getElementById("btn-slash");
let btnMinus = document.getElementById("btn-minus");
let btnTimes = document.getElementById("btn-times");
let btnPlus = document.getElementById("btn-plus");
let btnClear = document.getElementById("btn-clear");
let btnPosNeg = document.getElementById("btn-pos-neg");
let btnRemoveLast = document.getElementById("btn-remove-last");
let btnPoint = document.getElementById("btn-point");
let btnEquals = document.getElementById("btn-equals");
let btnNine = document.getElementById("btn-nine");
let btnEight = document.getElementById("btn-eight");
let btnSeven = document.getElementById("btn-seven");
let btnSix = document.getElementById("btn-six");
let btnFive = document.getElementById("btn-five");
let btnFour = document.getElementById("btn-four");
let btnThree = document.getElementById("btn-three");
let btnTwo = document.getElementById("btn-two");
let btnOne = document.getElementById("btn-one");
let btnZero = document.getElementById("btn-zero");
let calcScreen = document.getElementById("calc-screen");
let numpad = document.getElementsByClassName("numpad");

let btnTest = document.getElementById("btn-test");
let gridMain = document.getElementsByClassName("grid-main");
let nums = document.getElementsByClassName("nums");

// Loopa igenom alla knappar för att hitta value, alla knappar har samma class
// skapa en let buttons -> med en loop button length.
// inuti loop, ta button[index] och med funktion
// skapa en ONCLICk där button[index].value skickas till +=calcScreen.value

function getBtnValue(current) {
  calcScreen.value += current.value;
}

btnOne.addEventListener("click", () => {
  calcScreen.value += 1;
});
btnTwo.addEventListener("click", () => {
  calcScreen.value += btnTwo.value;
});
btnClear.addEventListener("click", () => {
  calcScreen.value = null;
});
