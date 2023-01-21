/* let name = "max";
// let name = "anna";  can't redeclare let varible

function greet() {
  let age = 18;
  let name = "hamdy";
  // it will be log the name and age inside function
  console.log(name, age);
}

// it will be log the first name in global scoop
console.log(name);

// error, becuase it not declared in global
// console.log(age);

greet();
 */

/* var name = "max";
var name = "anna"; // it will be reassained because we use var insted of let

function greet() {
  var age = 18;
  var name = "hamdy";
  // it will be log the name and age inside function
  console.log(name, age);
}

// it will be log the first name in global scoop
console.log(name);

// error, becuase it not declared in global
// console.log(age);

greet();
 */

let name = "Max";

if (name === "Max") {
  let hobbies = ["Sports", "Cooking"];
  console.log(hobbies);
}

function greet() {
  let age = 30;
  let name = "Manuel";
  console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet();
