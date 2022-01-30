import React from "react";
import { IsAuthType } from "../../redux/authReducer";
import { UserType } from "../../redux/usersPageReducer";
import UserCard from "./UserCard/UserCard";

export type UsersPropsType = {
  users: Array<UserType>;
  unfollow: (id: number) => Promise<void>;
  follow: (id: number) => Promise<void>;
  followingInProgress: Array<number>;
  isAuth: IsAuthType;
}


const Users: React.FC<UsersPropsType> = ({ users, unfollow, follow, followingInProgress, isAuth }) => {

  return (
    <div>
      <ul>
        {users.map((item: UserType) => {
          return (
            <UserCard key={item.id} user={item} unfollow={unfollow} follow={follow} followingInProgress={followingInProgress} isAuth={isAuth} />
          )
        })}
      </ul>
    </div>
  )
}

export default Users;