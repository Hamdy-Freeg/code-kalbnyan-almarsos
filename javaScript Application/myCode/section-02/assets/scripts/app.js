/* let currentResult = 0;

currentResult = ((currentResult + 15) * 3) / 2 - 3;

let calculationDescription = "(0 + 15) * 3/2 -1";

outputResult(currentResult, calculationDescription); */

/* const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 15) * 3) / 2 - 3;

let calculationDescription = "(0 + 15) * 3/2 -1";
outputResult(currentResult, calculationDescription);
 */

/* const defaultResult = 0;
let currentResult = defaultResult;

currentResult = "'('currentResult" + " 15) * 3 / 2 - 3";

let calculationDescription = "(0 + 15) * 3/2 -1";

outputResult(currentResult, calculationDescription);
 */

/* const defaultResult = 0;
let currentResult = defaultResult;

currentResult = `'('${currentResult}" + " 15) * 3 / 2 - 3`;

let calculationDescription = "(0 + 15) * 3/2 -1";
let errorMessage = "An error \n" + "occurred";

outputResult(currentResult, errorMessage);
 */

/* const defaultResult = 0;
let currentResult = defaultResult;

function add(number1, number2) {
  const result = number1 + number2;
  return result;
}

let additionResult = add(4, 2);
currentResult = additionResult;

// currentResult = add(4, 3);

let calculationDescription = `'(${defaultResult} +  10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
 */

/* const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult += userInput.value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
 */

/* const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function creatAndWriteOutput(resultBeforeCalc, operator, resultAfterCalc) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult += enteredNumber;
  creatAndWriteOutput(defaultNumber, "+", enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult -= enteredNumber;
  creatAndWriteOutput(defaultNumber, "-", enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult *= enteredNumber;
  creatAndWriteOutput(defaultNumber, "x", enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult /= enteredNumber;
  creatAndWriteOutput(defaultNumber, "/", enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide); */

/* // declare variables
const defaultResult = 0;
let currentResult = defaultResult;

// get input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

// generate output text
function creatAndWriteOutput(resultBeforeCalc, operator, resultAfterCalc) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
  outputResult(currentResult, calcDescription);
}

//
function add() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult += enteredNumber;
  creatAndWriteOutput(defaultNumber, "+", enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult -= enteredNumber;
  creatAndWriteOutput(defaultNumber, "-", enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult *= enteredNumber;
  creatAndWriteOutput(defaultNumber, "x", enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult /= enteredNumber;
  creatAndWriteOutput(defaultNumber, "/", enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide); */

/* // declare variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// get input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

// generate output text
function creatAndWriteOutput(resultBeforeCalc, operator, resultAfterCalc) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
  outputResult(currentResult, calcDescription);
}

//
function add() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult += enteredNumber;
  creatAndWriteOutput(defaultNumber, "+", enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries[1]);
}

function subtract() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult -= enteredNumber;
  creatAndWriteOutput(defaultNumber, "-", enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult *= enteredNumber;
  creatAndWriteOutput(defaultNumber, "x", enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult /= enteredNumber;
  creatAndWriteOutput(defaultNumber, "/", enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide); */

/* // declare variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// get input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

// generate output text
function creatAndWriteOutput(resultBeforeCalc, operator, resultAfterCalc) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
  outputResult(currentResult, calcDescription);
}

//
function add() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult += enteredNumber;
  creatAndWriteOutput(defaultNumber, "+", enteredNumber);
  const logEntry = {
    opration: "ADD",
    prevNumber: defaultNumber,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult -= enteredNumber;
  creatAndWriteOutput(defaultNumber, "-", enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult *= enteredNumber;
  creatAndWriteOutput(defaultNumber, "x", enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult /= enteredNumber;
  creatAndWriteOutput(defaultNumber, "/", enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
 */

// declare variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// get input from input field
function getUserInput() {
  return userInput.value;
}

// generate output text
function creatAndWriteOutput(resultBeforeCalc, operator, resultAfterCalc) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
  outputResult(currentResult, calcDescription);
}

//writing our log
function writeToLog(
  operationIdentifier,
  prevResult,
  oprationNumber,
  newResult
) {
  const logEntry = {
    opration: operationIdentifier,
    prevNumber: prevResult,
    number: oprationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

//
function add() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult += enteredNumber;
  creatAndWriteOutput(defaultNumber, "+", enteredNumber);
  writeToLog("ADD", defaultNumber, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult -= enteredNumber;
  creatAndWriteOutput(defaultNumber, "-", enteredNumber);
  writeToLog("SUBTRACT", defaultNumber, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult *= enteredNumber;
  creatAndWriteOutput(defaultNumber, "x", enteredNumber);
  writeToLog("MULTIPLY", defaultNumber, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const defaultNumber = currentResult;
  currentResult /= enteredNumber;
  creatAndWriteOutput(defaultNumber, "/", enteredNumber);
  writeToLog("DIVIDE", defaultNumber, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
