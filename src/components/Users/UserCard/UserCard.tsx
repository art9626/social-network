import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './UserCard.module.css'
import userIcon from '../../../assets/images/user-icon.jpeg'
import withShowError from '../../../hoc/withShowError';
import { UserType } from '../../../redux/usersPageReducer';
import { IsAuthType } from '../../../redux/authReducer';
import { FollowUnfollowError } from '../../../utils/errors/errors';

type UserCardPropsType = {
  user: UserType;
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  followingInProgress: Array<number>;
  isAuth: IsAuthType;
  showErrorMessage: (text: string) => void;
  errorMessage: string;
}

const UserCard: React.FC<UserCardPropsType> = ({ 
  user, 
  unfollow, 
  follow, 
  followingInProgress, 
  isAuth, 
  showErrorMessage, 
  errorMessage 
}) => {

  const onFollowUnfollow = (method: (id: number) => void) => {
    method(user.id)
      // .catch((err) => {
      //   if (err instanceof FollowUnfollowError) {
      //     showErrorMessage(err.message);
      //   } else {
      //     throw err;
      //   }
      // });
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