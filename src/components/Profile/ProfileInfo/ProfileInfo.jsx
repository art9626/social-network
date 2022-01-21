import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
// import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

const ProfileInfo = ({ 
  userProfile, 
  userStatus, 
  setStatus, 
  userId, 
  myId, 
  setPhoto, 
  inWaiting, 
  setProfileData,
}) => {

  const [editMode, setEditMode] = useState(false);

  const activeEditMode = () => {
    setEditMode(true);
  }

  const deactiveEditMode = () => {
    setEditMode(false);
  }

  const isOwner = (userId === myId);

  const onSubmitForm = (values) => {
    setProfileData(values)
      .then(() => setEditMode(false))
      .catch((err) => {
        if (err.name !== 'ProfileDataSaveError') {
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

              <ProfilePhoto userProfile={userProfile} inWaiting={inWaiting} setPhoto={setPhoto} isOwner={isOwner} />
              
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
              <ProfileStatusWithHooks userStatus={userStatus} setUserStatus={setStatus} isOwner={isOwner} />
            </div>
          </div>
          : <Preloader />
      }
    </>
  )
}

export default ProfileInfo;