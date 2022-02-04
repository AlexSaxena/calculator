console.log("Hello there!\nGeneral Kenobi!");

// Operators
let btnSlash = document.getElementById("btn-slash");
let btnMinus = document.getElementById("btn-minus");
let btnTimes = document.getElementById("btn-times");
let btnPlus = document.getElementById("btn-plus");
let btnClear = document.getElementById("btn-clear");
let btnPosNeg = document.getElementById("btn-pos-neg");
let btnRemoveLast = document.getElementById("btn-remove-last");
let btnDot = document.getElementById("btn-point");
let btnEquals = document.getElementById("btn-equals");

// Numbers
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

// MISC
let calcScreen = document.getElementById("calc-screen");
let numpad = document.getElementsByClassName("numpad");
let nums = document.querySelectorAll(".nums");
let currentNumber = "";

// gets nums NodeList -> forEach Num onClick add value to calcScreen
nums.forEach((num) => {
  num.addEventListener("click", () => {
    currentNumber = null;
    if (calcScreen.value.length <= 17) {
      calcScreen.value += num.value;
    }
    currentNumber = calcScreen.value;
  });
});

// Clear Screen
btnClear.addEventListener("click", () => {
  calcScreen.value = null;
});

// Removes latest Number
btnRemoveLast.addEventListener("click", () => {
  calcScreen.value = calcScreen.value.slice(0, -1);
});

// Single use of the point sign
btnDot.addEventListener("click", () => {
  let check = calcScreen.value;
  if (check.indexOf(".") == -1) {
    calcScreen.value += ".";
  }
});

// Change from Positive to Negative and back
btnPosNeg.addEventListener("click", () => {
  let test = calcScreen.value[0];
  if (test != "-") {
    calcScreen.value = "-" + calcScreen.value;
  } else {
    calcScreen.value = calcScreen.value.slice(1);
  }
});
