/* const addMovieModal = document.getElementById("add-modal");
const addMovieButton = document.getElementById("addMovieButton");
const cancelButton = document.querySelector(".btn--passive");
const backdrop = document.getElementById("backdrop");
const addButton = document.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const listRoot = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}

function deleteMovie(movieId) {
  let movieIndex = 0;
  for (let movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  closeMovieModal();
  updateUI();
}

function cancelMovieDeletion() {
  deleteMovieModal.classList.remove("visible");
  backdropToggle();
}

function deleteMovieHandel(movieId) {
  deleteMovieModal.classList.add("visible");
  backdropToggle();

  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  // confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId)); // will not work :(

  cancelDeletionButton.removeEventListener("click", cancelMovieDeletion);

  cancelDeletionButton.addEventListener("click", cancelMovieDeletion);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandel.bind(null, movieId)
  );
}

function addNewMovieElement(id, title, imageUrl, rating) {
  const newMOvieElement = document.createElement("li");
  newMOvieElement.className = "movie-element";
  newMOvieElement.innerHTML = `
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}"
  </div>
  
  
  `;

  newMOvieElement.addEventListener("click", deleteMovieHandel.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMOvieElement);
}

function backdropToggle() {
  backdrop.classList.toggle("visible");
}

function closeMovieModal() {
  addMovieModal.classList.remove("visible");
  // backdropToggle();
}

function showMovieModal() {
  addMovieModal.classList.add("visible");
  backdropToggle();
}

function clearMovieInput() {
  for (usrInput of userInputs) {
    usrInput.value = "";
  }
}

function cancelAddMovieHandler() {
  clearMovieInput();
  toggleBackdrop();
  closeMovieModal();
}

function addMovieAction() {
  const userTitle = userInputs[0].value;
  const userImg = userInputs[1].value;
  const userRating = userInputs[2].value;

  if (
    userTitle.trim() === "" ||
    userImg.trim() === "" ||
    userRating.trim() === "" ||
    +userRating < 1 ||
    +userRating > 5
  ) {
    alert("invalid input");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: userTitle,
    img: userImg,
    rating: userRating,
  };
  movies.push(newMovie);
  closeMovieModal();
  backdropToggle();
  clearMovieInput();
  addNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.img,
    newMovie.rating
  );
  updateUI();
}

function backdropClickHandler() {
  closeMovieModal();
  cancelMovieDeletion();
  clearMovieInput();
}

addMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelButton.addEventListener("click", cancelAddMovieHandler);
addButton.addEventListener("click", addMovieAction);
 */

const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  // confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId)); // will not work :(

  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);

  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  // function() {}
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
