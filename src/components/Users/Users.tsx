import React from "react";
import { IsAuthType } from "../../redux/authReducer";
import { UserType } from "../../redux/usersPageReducer";
import UserCard from "./UserCard/UserCard";

export type UsersPropsType = {
  users: Array<UserType>;
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  followingInProgress: Array<number>;
  isAuth: IsAuthType;
  errorMessage: string | null;
}


const Users: React.FC<UsersPropsType> = ({ users, unfollow, follow, followingInProgress, isAuth, errorMessage }) => {
  return (
    <div>
      {
        errorMessage ? <div>{errorMessage}</div> : null
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
}

export default Users;