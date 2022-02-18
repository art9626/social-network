import React from 'react';
import { FormAction } from 'redux-form';
import { ErrorMessagesType, PostType, UserProfileType } from '../../redux/profilePageReducer';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type SetErrorType = (errorText: string | null, errorName: string) => {
  readonly type: "social-network/profile/SET_ERROR";
  readonly errorText: string | null;
  readonly errorName: string;
};

export type AddPostType = (text: string) => { 
  readonly type: "social-network/profile/ADD-POST"; 
  readonly text: string; 
};

type PropsType = {
  isOwner: boolean;
  userProfile: UserProfileType | null;
  userStatus: string;
  setStatus: (text: string) => void;
  posts: Array<PostType>;
  reset: (form: string) => FormAction;
  addPost: AddPostType;
  setPhoto: (photo: File) => void;
  inWaiting: boolean;
  setProfileData: (data: UserProfileType) => Promise<void>;
  errorMessages: ErrorMessagesType;
  setError: SetErrorType;
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
  setProfileData,
  errorMessages,
  setError,
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
        errorMessages={errorMessages}
        setError={setError}
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