import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, dispatch }) => {
  return ( 
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts 
        posts={profilePage.posts} 
        newPostText={profilePage.newPostText} 
        dispatch={dispatch}
      />
    </div>
  )
}

export default Profile;