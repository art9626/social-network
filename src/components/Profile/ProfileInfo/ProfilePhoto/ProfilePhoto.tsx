import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userIcon from '../../../../assets/images/user-icon.jpeg'
import { setPhotoThunk, UserProfileType } from '../../../../redux/profilePageReducer';
import { getErrorMessages, getInWaiting } from '../../../../redux/profileSelecrors';
import Preloader from '../../../common/Preloader/Preloader';
import classes from './ProfilePhoto.module.css'

type PropsType = {
  userProfile: UserProfileType;
  isOwner: boolean;
}



const ProfilePhoto: React.FC<PropsType> = ({ isOwner, userProfile }) => {

  const inWaiting = useSelector(getInWaiting);
  const errorMessages = useSelector(getErrorMessages);
  const dispatch = useDispatch()

  const setPhoto = (photo: File) => dispatch(setPhotoThunk(photo));
  const { photos } = userProfile;
  const errorMessage = errorMessages.onSetPhotoErrorMessage;


  const onChooseFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  }


  return (
    <>
      {
        errorMessage && <div>{errorMessage}</div>
      }
      {
        inWaiting
          ? <Preloader />
          : <img src={photos.large || userIcon} className={classes.userPhoto} alt="User photo" />
      }
      {
        isOwner && <input id='input-file' onChange={onChooseFile} type="file" disabled={inWaiting} />
      }
    </>
  );
}

export default ProfilePhoto;