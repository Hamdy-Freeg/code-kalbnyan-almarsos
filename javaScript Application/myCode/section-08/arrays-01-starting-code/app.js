//ways to creat arrays
/* 
const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(5);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 3);
console.log(yetMoreNumbers);
 */

/* const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ["cooking", "sports"];
const personalData = [30, "max", { moreDetails: [] }];

const analyticsData = [
  [1, 1.5],
  [-5, 4, 2.1],
];

for (let data of analyticsData) {
  for (let dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);
 */

// Adding data in array 'Array methods'
/* const hobbies = ["sports", "cooking"];
// adding elements to array
hobbies.push("runing");
hobbies.unshift("eating");

// remove elements from array
hobbies.pop();
hobbies.shift();

// replacing elements in array
hobbies[1] = "reading";
// hobbies[5] = "coding";

// splice method
hobbies.splice(1, 0, "hello world", "balblabla");
console.log(hobbies);

const removedElements = hobbies.splice(0, 1);
console.log(removedElements);
 */

// const storedResults = testResults.slice();

// console.log(storedResults, testResults);

/* const testResults = [1, 5.3, 4.4, 6, 4.4, -8, 0];

const storedResults = testResults.concat([4.4, 3, 4.5, 3], [3, 3]);
testResults.push(4.33);

console.log(testResults, storedResults);
console.log(testResults.indexOf(4.4));
console.log(testResults.lastIndexOf(4.4));
console.log(testResults.includes(4.4));
console.log(testResults.indexOf(4.4) !== -1);

const personalData = [{ name: "hamdy" }, { name: "freeg" }];
console.log(personalData.indexOf({ name: "hamdy" }));

const freeg = personalData.find((person, idx, persons) => {
  return person.name === "freeg";
});

console.log(freeg);

const freegIndex = personalData.findIndex((person, idx, persons) => {
  return person.name === "freeg";
});

console.log(freegIndex);
 */

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });
/* const array = [1, 2, 3];
function transformToObjects(numberArray) {
  const returnObj = numberArray.map((arr) => {
    const obj = { val: arr };
    return obj;
  });

  console.log(returnObj);
}

transformToObjects(array);
*/

/* const prices = [34, 23, 5, 77.7, 4.3];
const tax = 0.29;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    -1;
  }
});
console.log(sortedPrices);

const filteredArray = prices.filter((price) => price > 5);

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue);

console.log(sum);

const data = "new york;10.99;2000";

const transformedData = data.split(";");
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ["max", "schwarz"];

const name = nameFragments.join(" ");
console.log(name);

const copiedNameFragments = [...nameFragments];
nameFragments.push("mr");
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...copiedNameFragments));

const persons = [
  { name: "max", age: 30 },
  { name: "manuel", age: 31 },
];
const copiedPersons = [
  ...persons.map((person) => ({ name: person.name, age: person.age })),
];
persons[0].age = 31;

persons.push({ name: "anna", age: 29 });
console.log(persons, copiedPersons);
 */
/* 
nameData = ["max", "schwarz", "mr", 30];

const [firstName, lastName, ...otherInfo] = nameData;
console.log(firstName, lastName, otherInfo);
 */
