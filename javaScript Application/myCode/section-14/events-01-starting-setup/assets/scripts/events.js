/* const button = document.querySelector("button");

// button.onclick = function () {
  
  // }
  
  
  function anotherButtonClickHandler() {
    console.log("this was clicked!");
  }
  
  // button.onclick = buttonClickHandler;
  // button.onclick = anotherButtonClickHandler;
  
  button.addEventListener("mouseenter", buttonClickHandler);
  
  
  
  
  // setTimeout(() => {
    //   button.removeEventListener("click", buttonClickHandler);
    // }, 3000);
    */

const buttons = document.querySelectorAll("button");
const button = document.querySelector("button");

function buttonClickHandler(e) {
  console.log(e);
}

button.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("clicked button");
  console.log(event);
  console.log(this);
});

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (e) => console.log(e));

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log("hello from form submit");
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

list.addEventListener("click", function (event) {
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  // form.submit();
  button.click();
  console.log(this);
});
