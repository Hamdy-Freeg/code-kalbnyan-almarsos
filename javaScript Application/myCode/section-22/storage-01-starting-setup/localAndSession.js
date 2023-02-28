const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

const userId = "u334";
const user = {
  name: "hamdy",
  age: 20,
  hobbies: ["spots", "cooking"],
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("uid", JSON.stringify(user));
});

retrieveBtn.addEventListener("click", () => {
  const extractedId = sessionStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);
  if (extractedId) {
    console.log("got the id " + extractedId);
  } else {
    console.log("could not find id.");
  }
});
