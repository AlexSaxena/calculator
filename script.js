console.log("Hello there!\nGeneral Kenobi!");

// Operators
let btnClear = document.getElementById("btn-clear");
let btnPosNeg = document.getElementById("btn-pos-neg");
let btnRemoveLast = document.getElementById("btn-remove-last");
let btnDot = document.getElementById("btn-point");
let btnEquals = document.getElementById("btn-equals");
let operators = document.querySelectorAll(".operator");

// MISC
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
btnPosNeg.addEventListener("click", () => {
  let prefix = calcScreen.value[0];
  if (prefix != "-") {
    calcScreen.value = "-" + calcScreen.value;
    if (calcScreen.value.length < 2) {
      calcScreen.value += "0";
    }
    currentNumber = calcScreen.value;
  } else {
    calcScreen.value = calcScreen.value.slice(1);
    currentNumber = calcScreen.value;
  }
});

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
  });
});

// Summary Eventlistener
btnEquals.addEventListener("click", () => {
  active = false;
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
