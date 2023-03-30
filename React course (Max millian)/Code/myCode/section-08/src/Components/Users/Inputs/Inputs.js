import React, { useState } from 'react';

import Button from '../../Ui/Button/Button';
import Card from '../../Ui/Card/Card';
import Error from '../../Ui/ErrorMessage/Error';
import './Inputs.css';

function Inputs(props) {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();
  let errorComponent;

  function getUser(event) {
    event.preventDefault();
    if (!userName.trim() || +age.trim() < 10) {
      setError({
        title: 'Invalid input',
        text: 'Please enter a valid name and age (age must be above 10)',
      });
      return;
    }
    props.onAddUser(userName, age);
    setUserName('');
    setAge('');
  }

  function closeErrorHandler() {
    setError(false);
  }

  if (error) {
    errorComponent = (
      <Error
        onClick={closeErrorHandler}
        title={error.title}
        text={error.text}
      />
    );
  }

  function getUserName(event) {
    setUserName(event.target.value);
  }

  function getAge(event) {
    setAge(event.target.value);
  }

  return (
    <div>
      {errorComponent}
      <Card className="input">
        <form onSubmit={getUser}>
          <label htmlFor="userName">User Name</label>
          <input
            onChange={getUserName}
            value={userName}
            id="userName"
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input onChange={getAge} value={age} id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default Inputs;
