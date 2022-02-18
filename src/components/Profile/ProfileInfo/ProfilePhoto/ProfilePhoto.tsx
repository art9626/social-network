import React, { ChangeEvent } from 'react';
import userIcon from '../../../../assets/images/user-icon.jpeg'
import { UserProfileType } from '../../../../redux/profilePageReducer';
import Preloader from '../../../common/Preloader/Preloader';
import classes from './ProfilePhoto.module.css'

type PropsType = {
  errorMessage: string | null;
  userProfile: UserProfileType;
  isOwner: boolean;
  setPhoto: (photo: File) => void;
  inWaiting: boolean;
}



const ProfilePhoto: React.FC<PropsType> = ({ errorMessage, isOwner, setPhoto, inWaiting, userProfile }) => {

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
          : <img src={userProfile.photos.large || userIcon} className={classes.userPhoto} alt="User photo" />
      }
      {
        isOwner && <input id='input-file' onChange={onChooseFile} type="file" disabled={inWaiting} />
      }
    </>
  );
}

export default ProfilePhoto;