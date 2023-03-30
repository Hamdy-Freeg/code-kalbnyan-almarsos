import React, { useState, Fragment } from 'react';

import Inputs from './Components/Users/Inputs/Inputs';
import UserList from './Components/Users/UserListComponent/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  let key = Math.floor(Math.random() * 10000000).toString();
  function addUserHandler(uName, uAge) {
    setUserList((prev) => {
      return [
        ...prev,
        {
          name: uName,
          age: uAge,
          id: key,
          key: key,
        },
      ];
    });
  }

  return (
    <Fragment>
      <Inputs onAddUser={addUserHandler}></Inputs>
      <UserList users={userList}></UserList>
    </Fragment>
  );
}

export default App;
