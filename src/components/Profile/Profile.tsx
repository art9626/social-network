import React from 'react';
import { FormAction } from 'redux-form';
import { PostType, UserProfileType } from '../../redux/profilePageReducer';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropsType = {
  isOwner: boolean;
  userProfile: UserProfileType | null;
  userStatus: string;
  setStatus: (text: string) => Promise<void>;
  posts: Array<PostType>;
  reset: (form: string) => FormAction;
  addPost: (text: string) => {readonly type: "social-network/profile/ADD-POST"; readonly text: string;}
  setPhoto: (photo: File) => Promise<void>;
  inWaiting: boolean;
  setProfileData: (data: UserProfileType) => Promise<void>;
}

const Profile: React.FC<PropsType> = ({
  isOwner,
  userProfile,
  userStatus,
  setStatus,
  posts,
  reset,
  addPost,
  setPhoto,
  inWaiting,
  setProfileData
}) => {

  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
        userProfile={userProfile}
        userStatus={userStatus}
        setStatus={setStatus}
        setPhoto={setPhoto}
        inWaiting={inWaiting}
        setProfileData={setProfileData}
      />
      <MyPosts
        posts={posts}
        resetForm={reset}
        addPost={addPost}
      />
    </div>
  )
}

export default Profile;