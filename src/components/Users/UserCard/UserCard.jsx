import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './UserCard.module.css'
import userIcon from '../../../assets/images/user-icon.jpeg'
import withShowError from '../../../hoc/withShowError';

const UserCard = ({ user, unfollow, follow, followingInProgress, isAuth, showErrorMessage, errorMessage }) => {

  const onFollowUnfollow = (method) => {
    method(user.id)
      .catch((err) => {
        if (err.name === 'FollowUnfollowError') {
          showErrorMessage(err.message);
        } else {
          throw err;
        }
      });
  }

  const onFollow = () => {
    onFollowUnfollow(follow);
  }

  const onUnfollow = () => {
    onFollowUnfollow(unfollow);
  }


  return (
    <li>
      <NavLink to={`/profile/${user.id}`}>
        <img className={classes.userIcon} src={user.photos.small ? user.photos.small : userIcon} alt="" />
      </NavLink>
      
      <span>{user.name}</span>

      <div>
        {
          isAuth === 'authorized' &&
          (user.followed
            ? <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={onUnfollow}
            >
              Unfollow
            </button>

            : <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={onFollow}
            >
              Follow
            </button>)
        }
        {
          errorMessage && <span>{errorMessage}</span>
        }
      </div>
    </li>
  );
}

export default withShowError(UserCard);