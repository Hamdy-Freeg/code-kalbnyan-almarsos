const button = document.querySelector("button");

button.addEventListener("click", () => {
  const p = document.querySelector("p").textContent;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(p)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("your text is cobied " + p);
  } else {
    alert(
      "Feature is not available, Please copy manually or change your browser"
    );
  }
});
