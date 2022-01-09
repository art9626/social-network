import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
  userId,
  auth,
  userProfile,
  userStatus,
  myId,
  getProfile,
  getStatus,
  setStatus,
  posts,
  reset,
  addPostAC,
}) => {


  console.log('Profile');

  return (
    <div>
      <ProfileInfo
        userId={userId}
        myId={myId}
        userProfile={userProfile}
        userStatus={userStatus}
        auth={auth}
        getProfile={getProfile}
        getStatus={getStatus}
        setStatus={setStatus}
      />
      <MyPosts
        posts={posts}
        resetForm={reset}
        addPost={addPostAC}
      />
    </div>
  )
}

export default Profile;