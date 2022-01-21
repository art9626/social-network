import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
  userId,
  userProfile,
  userStatus,
  myId,
  getProfile,
  getStatus,
  setStatus,
  posts,
  reset,
  addPostAC,
  setPhoto,
  inWaiting,
  setProfileData
}) => {
  return (
    <div>
      <ProfileInfo
        userId={userId}
        myId={myId}
        userProfile={userProfile}
        userStatus={userStatus}
        getProfile={getProfile}
        getStatus={getStatus}
        setStatus={setStatus}
        setPhoto={setPhoto}
        inWaiting={inWaiting}
        setProfileData={setProfileData}
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