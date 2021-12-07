import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return ( 
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;