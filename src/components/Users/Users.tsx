import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../redux/authSelecrors";
import { followThunk, unfollowThunk, UserType } from "../../redux/usersPageReducer";
import { getErrorMessages, getFollowingInProgress, getUsers } from "../../redux/usersSelecrors";
import { UserCard } from "./UserCard/UserCard";

export const Users: React.FC = React.memo(() => {

  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const isAuth = useSelector(getIsAuth);
  const errorMessage = useSelector(getErrorMessages);

  const dispatch = useDispatch();

  const follow = (id: number) => dispatch(followThunk(id));
  const unfollow = (id: number) => dispatch(unfollowThunk(id));

  return (
    <div>
      {
        errorMessage.onFollowUnfollowErrorMessage ? <div>{errorMessage.onFollowUnfollowErrorMessage}</div> : null
      }
      <ul>
        {users.map((item: UserType) => {
          return (
            <UserCard
              key={item.id}
              user={item}
              unfollow={unfollow}
              follow={follow}
              followingInProgress={followingInProgress}
              isAuth={isAuth}
            />
          )
        })}
      </ul>
    </div>
  )
});