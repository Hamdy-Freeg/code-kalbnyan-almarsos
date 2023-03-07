const form = document.getElementById('user-input');
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

function signupHandler(event) {
  event.preventDefault();
  const enteredUserName = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUserName.trim().length === 0) {
    alert('invalid input - username must not be empty!');
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert('invalid input - password must be more than 5 characters!');
    return;
  }

  const user = {
    userName: enteredUserName,
    password: enteredPassword,
  };

  console.log(user);
  console.log('hi, i am ' + user.userName);
}

form.addEventListener('submit', signupHandler);
