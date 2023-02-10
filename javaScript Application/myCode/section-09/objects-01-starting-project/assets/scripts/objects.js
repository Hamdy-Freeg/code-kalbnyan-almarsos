const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

const userKeyName = "level";

let person = {
  "first name": "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  [userKeyName]: "blank ",
  greet: function () {
    alert("hello world");
  },
  44: "hi",
};
// object with number key is always sorted to assending order
const numberObj = { 5: "hello", 3: "world" };
person.isAdmin = true;
// person.greet();

// delete person.age;
// person.age = null;

const keyName = "first name";

console.log(person);
console.log(person["age"]);
console.log(person[44]);
console.log(numberObj);
console.log(person[keyName]);
