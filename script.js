console.log("Hello there!\nGeneral Kenobi!");

// Operators
// let btnSlash = document.getElementById("btn-slash");
// let btnMinus = document.getElementById("btn-minus");
// let btnTimes = document.getElementById("btn-times");
// let btnAddition = document.getElementById("btn-plus");
let btnClear = document.getElementById("btn-clear");
let btnPosNeg = document.getElementById("btn-pos-neg");
let btnRemoveLast = document.getElementById("btn-remove-last");
let btnDot = document.getElementById("btn-point");
let btnEquals = document.getElementById("btn-equals");
let operators = document.querySelectorAll(".operator");

// Numbers
// let btnNine = document.getElementById("btn-nine");
// let btnEight = document.getElementById("btn-eight");
// let btnSeven = document.getElementById("btn-seven");
// let btnSix = document.getElementById("btn-six");
// let btnFive = document.getElementById("btn-five");
// let btnFour = document.getElementById("btn-four");
// let btnThree = document.getElementById("btn-three");
// let btnTwo = document.getElementById("btn-two");
// let btnOne = document.getElementById("btn-one");
// let btnZero = document.getElementById("btn-zero");

// MISC
// let numpad = document.getElementsByClassName("numpad");
let calcScreen = document.getElementById("calc-screen");
let nums = document.querySelectorAll(".nums");
let currentNumber = "";
let operatorChoice = "";
let firstValue = "";
let solution = false;
let active = false;

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
      if (calcScreen.value.length <= 14) {
        calcScreen.value += num.value;
      }
      currentNumber = calcScreen.value;
    }
  });
});

// Clear Screen
btnClear.addEventListener("click", () => {
  calcScreen.value = null;
  calcScreen.placeholder = 0;
  currentNumber = 0;
});

// Removes latest Number
btnRemoveLast.addEventListener("click", () => {
  if (calcScreen.value.length < 1) {
    calcScreen.value = null;
    calcScreen.placeholder = 0;
    currentNumber = 0;
  }
  calcScreen.value = calcScreen.value.slice(0, -1);
});

// Single use of the point sign
btnDot.addEventListener("click", () => {
  let check = calcScreen.value;
  if (check.indexOf(".") == -1) {
    if (check.length < 1) {
      calcScreen.value += 0;
      calcScreen.value += ".";
    } else {
      calcScreen.value += ".";
    }
  }
});

// Change from Positive to Negative and back
// CHANGE NAME FROM TEST & ADD 0 IF EMPTY
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
  Take all operators and put in nodeList -> forEach to get operator and reset CurrentValue
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
// bool checks if true, do as usual if notTrue send 2 summary and set true
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (active == false) {
      firstValue = currentNumber;
      operatorChoice = operator.value;
      calcScreen.value = null;
      calcScreen.placeholder = firstValue;
      currentNumber = 0;
      active = true;
    } else if (active == true) {
      summary(operatorChoice);
      firstValue = currentNumber;
      operatorChoice = operator.value;
      calcScreen.value = null;
      calcScreen.placeholder = firstValue;
      currentNumber = 0;
    }

    // firstValue = currentNumber;
    // operatorChoice = operator.value;
    // calcScreen.value = null;
    // calcScreen.placeholder = firstValue;
    // currentNumber = 0;
    // console.log(
    //   `FirstValue: ${firstValue}\nOperatorChoice: ${operatorChoice}\ncalScreen.value: ${calcScreen.value}\ncurrentNumber: ${currentNumber}`
    // );
  });
});

// Summary Eventlistener
btnEquals.addEventListener("click", () => {
  active = false;
  // switch (operatorChoice) {
  //   case "+":
  //     addition(firstValue, currentNumber);
  //     console.log("plus");
  //     break;
  //   case "-":
  //     console.log("minus");
  //     subtraction(firstValue, currentNumber);
  //     break;
  //   case "x":
  //     console.log("gånger");
  //     multiplication(firstValue, currentNumber);
  //     break;
  //   case "/":
  //     console.log("delat");
  //     division(firstValue, currentNumber);
  //     break;
  // }
  summary(operatorChoice);
});

// Function for finding summary depending on operator
function summary(operatorChoice) {
  switch (operatorChoice) {
    case "+":
      addition(firstValue, currentNumber);
      console.log("plus");
      break;
    case "-":
      console.log("minus");
      subtraction(firstValue, currentNumber);
      break;
    case "x":
      console.log("gånger");
      multiplication(firstValue, currentNumber);
      break;
    case "/":
      console.log("delat");
      division(firstValue, currentNumber);
      break;
  }
}

// Addition function
function addition(num1, num2) {
  let parsedNum1 = parseFloat(num1);
  let parsedNum2 = parseFloat(num2);
  let answer = parsedNum1 + parsedNum2;
  let rounded = Math.round((answer + Number.EPSILON) * 100) / 100;
  currentNumber = rounded;
  calcScreen.value = rounded;
  calcScreen.placeholder = rounded;
  solution = true;
}
// Subtraction Function
function subtraction(num1, num2) {
  let parsedNum1 = parseFloat(num1);
  let parsedNum2 = parseFloat(num2);
  let answer = parsedNum1 - parsedNum2;
  let rounded = Math.round((answer + Number.EPSILON) * 100) / 100;
  currentNumber = rounded;
  calcScreen.value = rounded;
  calcScreen.placeholder = rounded;
  solution = true;
}
// Multiplication function
function multiplication(num1, num2) {
  let parsedNum1 = parseFloat(num1);
  let parsedNum2 = parseFloat(num2);
  let answer = parsedNum1 * parsedNum2;
  let rounded = Math.round((answer + Number.EPSILON) * 100) / 100;
  currentNumber = rounded;
  calcScreen.value = rounded;
  calcScreen.placeholder = rounded;
  solution = true;
}
// Division function
function division(num1, num2) {
  if (num2 != 0) {
    let parsedNum1 = parseFloat(num1);
    let parsedNum2 = parseFloat(num2);
    let answer = parsedNum1 / parsedNum2;
    let rounded = Math.round((answer + Number.EPSILON) * 100) / 100;
    currentNumber = rounded;
    calcScreen.value = rounded;
    calcScreen.placeholder = rounded;
    solution = true;
  } else if (num2 == 0) {
    calcScreen.value = "Lmao, Try again!";
    solution = true;
  }
}
