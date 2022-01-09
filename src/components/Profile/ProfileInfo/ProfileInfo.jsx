import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
// import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = ({ userProfile, userStatus, setStatus, userId, myId }) => {

  console.log('ProfileInfo');

  return (
    <>
      {
        userProfile
          ?
          <div>
            <div className={classes.profileContent}>
              <img src={userProfile.photos.large} alt="Avatar" />
              <h2>{userProfile.fullName}</h2>
              <ProfileStatusWithHooks status={userStatus} setStatus={setStatus} userId={userId} myId={myId} />
              <p>{userProfile.aboutMe}</p>
            </div>
          </div>
          : <Preloader />
      }
    </>
  )
}

export default ProfileInfo;