import React, { ChangeEvent, ComponentType } from 'react';
import userIcon from '../../../../assets/images/user-icon.jpeg'
import withShowError from '../../../../hoc/withShowError';
import { UserProfileType } from '../../../../redux/profilePageReducer';
import { ProfilePhotoSaveError } from '../../../../utils/errors/errors';
import Preloader from '../../../common/Preloader/Preloader';
import classes from './ProfilePhoto.module.css'

type PropsType = {
  errorMessage: string | null;
  showErrorMessage: (text: string) => void;
  userProfile: UserProfileType;
  isOwner: boolean;
  setPhoto: (photo: File) => Promise<void>;
  inWaiting: boolean;
}



const ProfilePhoto: React.FC<PropsType> = ({ errorMessage, showErrorMessage, isOwner, setPhoto, inWaiting, userProfile }) => {

  // remove async
  const onChooseFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        await setPhoto(e.target.files[0]);
      } catch (err) {
        if (err instanceof ProfilePhotoSaveError) {
          showErrorMessage(err.message);
        } else {
          throw err;
        }
      }
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

export default withShowError(ProfilePhoto);