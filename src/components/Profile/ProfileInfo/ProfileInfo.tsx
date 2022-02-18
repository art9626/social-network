import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
// import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useState } from 'react';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import { ErrorMessagesType, UserProfileType } from '../../../redux/profilePageReducer';
import { ProfileDataSaveError } from '../../../utils/errors/errors';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { SetErrorType } from '../Profile';

type PropsType = {
  userProfile: UserProfileType | null;
  userStatus: string;
  setStatus: (text: string) => void;
  isOwner: boolean;
  setPhoto: (photo: File) => void;
  inWaiting: boolean;
  setProfileData: (data: UserProfileType) => Promise<void>;
  errorMessages: ErrorMessagesType;
  setError: SetErrorType;
}


const ProfileInfo: React.FC<PropsType> = ({
  userProfile,
  userStatus,
  setStatus,
  isOwner,
  setPhoto,
  inWaiting,
  setProfileData,
  errorMessages,
  setError,
}) => {

  const [editMode, setEditMode] = useState(false);

  const activeEditMode = () => {
    setEditMode(true);
  }

  const deactiveEditMode = () => {
    setEditMode(false);
  }

  const onSubmitForm = (values: UserProfileType) => {
    setProfileData(values)
      //remove.then
      .then(() => setEditMode(false))
      .catch((err) => {
        if (err instanceof ProfileDataSaveError) {
          throw err;
        }
      })
  }

  return (
    <>
      {
        userProfile
          ? <div>
            <div className={classes.profileContent}>

              <ProfilePhoto userProfile={userProfile} inWaiting={inWaiting} setPhoto={setPhoto} isOwner={isOwner} errorMessage={errorMessages.onSetPhotoErrorMessage} />

              {
                editMode
                  ? <ProfileDataForm
                    initialValues={userProfile}
                    userProfile={userProfile}
                    onSubmit={onSubmitForm}
                    deactiveEditMode={deactiveEditMode}
                  />
                  : <ProfileData
                    userProfile={userProfile}
                    activeEditMode={activeEditMode}
                    isOwner={isOwner}
                  />
              }
              <ProfileStatus
                userStatus={userStatus}
                setUserStatus={setStatus}
                isOwner={isOwner}
                errorMessage={errorMessages.onSetStatusErrorMessage}
                setError={setError}
              />
            </div>
          </div>
          : <Preloader />
      }
    </>
  )
}

export default ProfileInfo;