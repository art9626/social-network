import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './UserCard.module.css'
import userIcon from '../../../assets/images/user-icon.jpeg'

const UserCard = ({ user, unfollow, follow, followingInProgress, isAuth }) => {
  return (
    <li>
      <NavLink to={`/profile/${user.id}`}>
        <img className={classes.userIcon} src={user.photos.small ? user.photos.small : userIcon} alt="" />
      </NavLink>
      <span>{user.name}</span>


      {
        isAuth === 'authorized' &&
        (user.followed
          ? <button
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => unfollow(user.id)}
          >
            Unfollow
          </button>

          : <button
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => follow(user.id)}
          >
            Follow
          </button>)
      }
    </li>
  );
}

export default UserCard;