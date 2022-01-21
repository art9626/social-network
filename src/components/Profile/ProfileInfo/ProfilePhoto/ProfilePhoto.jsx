import React from 'react';
import userIcon from '../../../../assets/images/user-icon.jpeg'
import withShowError from '../../../../hoc/withShowError';
import Preloader from '../../../common/Preloader/Preloader';
import classes from './ProfilePhoto.module.css'

const ProfilePhoto = ({ errorMessage, showErrorMessage, isOwner, setPhoto, inWaiting, userProfile }) => {

  const onChooseFile = async (e) => {
    if (e.target.files[0]) {
      try {
        await setPhoto(e.target.files[0]);
      } catch (err) {
        if (err.name === 'ProfilePhotoSaveError') {
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