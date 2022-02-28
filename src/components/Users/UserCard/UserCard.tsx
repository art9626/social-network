import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './UserCard.module.css'
import userIcon from '../../../assets/images/user-icon.jpeg'
import { UserType } from '../../../redux/usersPageReducer';
import { IsAuthType } from '../../../redux/authReducer';

type UserCardPropsType = {
  user: UserType;
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  followingInProgress: Array<number>;
  isAuth: IsAuthType;
}

export const UserCard: React.FC<UserCardPropsType> = React.memo(({ 
  user, 
  unfollow, 
  follow, 
  followingInProgress, 
  isAuth, 
}) => {

  const onFollowUnfollow = (method: (id: number) => void) => {
    method(user.id)
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
      </div>
    </li>
  );
});