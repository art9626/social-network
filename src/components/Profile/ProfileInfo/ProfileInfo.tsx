import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
// import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import { UserProfileType } from '../../../redux/profilePageReducer';
import { ProfileDataSaveError } from '../../../utils/errors/errors';

type PropsType = {
  userProfile: UserProfileType | null;
  userStatus: string; 
  setStatus: (text: string) => Promise<void>; 
  userId: number | null; 
  myId: number| null;
  setPhoto: (photo: File) => Promise<void>;
  inWaiting: boolean;
  setProfileData: (data: UserProfileType) => Promise<void>;
}


const ProfileInfo: React.FC<PropsType> = ({ 
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

  const onSubmitForm = (values: UserProfileType) => {
    setProfileData(values)
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