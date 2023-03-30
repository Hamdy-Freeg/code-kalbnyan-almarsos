import Card from '../../Ui/Card/Card';

import './UserList.css';

function UserList(props) {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li key={user.key} id={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
