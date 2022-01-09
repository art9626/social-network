import React from "react";
import UserCard from "./UserCard/UserCard";


const Users = ({ users, unfollow, follow, followingInProgress, isAuth }) => {


  return (
    <div>
      <ul>
        {users.map(item => {
          return (
            <UserCard key={item.id} user={item} unfollow={unfollow} follow={follow} followingInProgress={followingInProgress} isAuth={isAuth} />
          )
        })}
      </ul>
    </div>
  )
}

export default Users;