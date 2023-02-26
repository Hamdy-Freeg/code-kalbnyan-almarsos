const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const formSection = document.getElementById("new-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");
function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // xhr.open(method, url);
  // xhr.responseType = "json";
  // xhr.onload = function () {
  //   if (xhr.status >= 200 && xhr.status < 300) {
  //     resolve(xhr.response);
  //   } else {
  //     reject(new Error("Something went wrong!"));
  //   }
  // };
  // xhr.onerror = function () {
  //   reject(new Error("Failed to send request!"));
  // };
  // xhr.send(JSON.stringify(data));
  return fetch(url, {
    method: method,
    // body: JSON.stringify(data),
    body: data,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("something went wrong - server-side");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Something went wrong!");
    });
}

async function fetchPosts() {
  // try {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/pso"
  );
  const listOfPosts = responseData;
  if (listElement.children.length > 0) {
    listElement.innerHTML = `<li></li>`;
  }

  listOfPosts.forEach((post) => {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    listElement.append(postEl);
  });
  // } catch (error) {
  //   alert(error.message);
  // }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    id: userId,
  };
  const fd = new FormData(form);
  // fd.append("title", title);
  // fd.append("content", content);
  fd.append("userId", userId);
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

// async function deletePost() {
//   sendHttpRequest("DLETE", "https://jsonplaceholder.typicode.com/posts", )
// }

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  let titleInput = document.getElementById("title").value;
  let contentInput = document.getElementById("content").value;
  event.preventDefault();

  createPost(titleInput, contentInput);
  console.log(titleInput, contentInput);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
