import React from "react";
import classes from './Users.module.css'
import userIcon from '../../assets/images/user-icon.jpeg'
import axios from "axios";


const Users = ({ users, follow, unFollow, setUsers }) => {

  const getUsers = () => {
    if (users.length === 0) {

      // fetch('https://social-network.samuraijs.com/api/1.0/users')
      //   .then(res => res.json())
      //   .then(res => setUsers(res.items));

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => setUsers(res.data.items))

    }
  }

  return (
    <div>
      <h1 className={classes.header}>Users</h1>

      <button onClick={getUsers}>Get Users</button>

      <ul>
        {users.map(item => {
          return (
            <li key={item.id}>
              <img className={classes.userIcon} src={item.photos.small ? item.photos.small : userIcon} alt="" />
              <span>{item.name}</span>

              {item.followed
                ? <button onClick={() => unFollow(item.id)}>Unfollow</button>
                : <button onClick={() => follow(item.id)}>Follow</button>
              }
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Users;