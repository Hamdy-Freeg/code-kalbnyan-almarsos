import React, { useState, useRef } from 'react';

import Button from '../../Ui/Button/Button';
import Card from '../../Ui/Card/Card';
import Error from '../../Ui/ErrorMessage/Error';
import Wrapper from '../../Helpers/Wrapper';
import './Inputs.css';

function Inputs(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  let errorComponent;

  function getUser(event) {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (!enteredUserName.trim() || +enteredUserAge.trim() < 10) {
      setError({
        title: 'Invalid input',
        text: 'Please enter a valid name and age (age must be above 10)',
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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

  return (
    <Wrapper>
      {errorComponent}
      <Card className="input">
        <form onSubmit={getUser}>
          <label htmlFor="userName">User Name</label>
          <input id="userName" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default Inputs;
