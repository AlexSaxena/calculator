console.log("Hello there!\nGeneral Kenobi!");

// Operators
let btnSlash = document.getElementById("btn-slash");
let btnMinus = document.getElementById("btn-minus");
let btnTimes = document.getElementById("btn-times");
let btnAddition = document.getElementById("btn-plus");
let btnClear = document.getElementById("btn-clear");
let btnPosNeg = document.getElementById("btn-pos-neg");
let btnRemoveLast = document.getElementById("btn-remove-last");
let btnDot = document.getElementById("btn-point");
let btnEquals = document.getElementById("btn-equals");
let operators = document.querySelectorAll(".operator");

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
let operatorChoice = "";
let firstValue = "";
let solution = false;

// gets nums NodeList -> forEach Num onClick add value to calcScreen
nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (solution != false) {
      currentNumber = 0;
      calcScreen.value = null;
      calcScreen.value += num.value;
      currentNumber = calcScreen.value;
      solution = false;
    } else if (solution == false) {
      currentNumber = 0;
      if (calcScreen.value.length <= 17) {
        calcScreen.value += num.value;
      }
      currentNumber = calcScreen.value;
    }
  });
});

// Clear Screen
btnClear.addEventListener("click", () => {
  calcScreen.value = null;
  currentNumber = 0;
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
    currentNumber = calcScreen.value;
  } else {
    calcScreen.value = calcScreen.value.slice(1);
    currentNumber = calcScreen.value;
  }
});

/* 
  - Operators -
  Create operator btnEventlisteners. (+ - x /)
  In each Event
                - Take the CurrentNumber (from screen) and save in variable -> firstValue).
                - Save Operator Choice in a global var.
                - Set CurrentScreen value to 0
                - Set CurrentNumber to 0


  OR ver2 | Take all operators and put in nodeList -> forEach to get operator and reset CurrentValue
                                                    - Save Operator Choice in a global var. (operatorChoice = operator.value)
                                                    - Save currentNumber in var firstValue.
                                                    - Set CurrentScreen value to 0
                                                    - Set CurrentNumber to 0
                                                    REASON: put all operators in ONE eventlistener and make functions
                                                            for operation later.

                                                    NOTE: Add counter in OPERATOR | if more than 1 send arguments directly to Summary Event

  In Summary / Equal Event
                           - Take New currentValue and save in Variable -> secondValue.
                           - parseFloat firstValue & secondValue
                           - Use Switch to check Operator and procced with calculation
*/

// gets Operators NodeList -> forEach Operator onClick Save values, operatorChoice, resets values
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    console.log(currentNumber);
    firstValue = currentNumber;
    operatorChoice = operator.value;
    calcScreen.value = null;
    currentNumber = 0;
    console.log(
      `FirstValue: ${firstValue}\nOperatorChoice: ${operatorChoice}\ncalScreen.value: ${calcScreen.value}\ncurrentNumber: ${currentNumber}`
    );
  });
});

// Summary Eventlistener

// Addition function
function addition(num1, num2) {
  let parsedNum1 = parseFloat(num1);
  let parsedNum2 = parseFloat(num2);
  let answer = parsedNum1 + parsedNum2;
  currentNumber = answer;
  calcScreen.value = answer;
  solution = true;

  console.log(answer);
}

// Subtraction Function
// Multiplication function
// Division function
