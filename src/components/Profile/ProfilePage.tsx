import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAuth } from '../../redux/authSelecrors';
import { getProfileThunk, getStatusThunk } from '../../redux/profilePageReducer';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


export type SetErrorType = (errorText: string | null, errorName: string) => {
  readonly type: "social-network/profile/SET_ERROR";
  readonly errorText: string | null;
  readonly errorName: string;
};





const ProfilePage: React.FC = React.memo(() => {
  let { id } = useParams();
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  const getProfile = (id: number | null) => dispatch(getProfileThunk(id));
  const getStatus = (id: number) => dispatch(getStatusThunk(id));



  let currentUserId: number | null = null;

  if (id) {
    currentUserId = +id;
  }

  if (!currentUserId) {
    const { isAuth, id } = auth;
    if (isAuth === 'authorized') {
      currentUserId = id;
    }
  }

  const isOwner = currentUserId === auth.id;


  const getCurrentUserData = () => {
    if (typeof currentUserId === 'number') {
      getProfile(currentUserId);
      getStatus(currentUserId);
    }
  }

  useEffect(() => {
    getCurrentUserData();
  }, [currentUserId]);




  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
      />
      <MyPosts />
    </div>
  );
});



export default ProfilePage;