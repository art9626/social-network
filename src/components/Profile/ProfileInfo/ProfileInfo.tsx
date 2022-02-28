import React, { MouseEvent } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import { ProfileDataForm } from './ProfileDataForm/ProfileDataForm';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import { actions, setProfileDataThunk, UserProfileType } from '../../../redux/profilePageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileInfoEditMode, getUserProfile } from '../../../redux/profileSelecrors';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

type PropsType = {
  isOwner: boolean;
}


export const ProfileInfo: React.FC<PropsType> = React.memo(({ isOwner }) => {

  const userProfile = useSelector(getUserProfile);
  const editMode = useSelector(getProfileInfoEditMode);

  const dispatch = useDispatch();

  const setProfileData = (data: UserProfileType) => dispatch(setProfileDataThunk(data));
  const setEditMode = (state: boolean, fieldName: string) => dispatch(actions.toggleEditMode(state, fieldName));



  const activeEditMode = () => {
    setEditMode(true, 'profileInfoEditMode');
  }

  const deactiveEditMode = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(false, 'profileInfoEditMode');
  }




  return (
    <>
      {
        userProfile
          ? <div>
            <div className={classes.profileContent}>

              <ProfilePhoto userProfile={userProfile} isOwner={isOwner} />

              {
                editMode
                  ? <ProfileDataForm
                      initialValues={userProfile}
                      deactiveEditMode={deactiveEditMode}
                      setProfileData={setProfileData}
                    />
                  : <ProfileData
                      userProfile={userProfile}
                      activeEditMode={activeEditMode}
                      isOwner={isOwner}
                    />

              }
              <ProfileStatus isOwner={isOwner} />
            </div>
          </div>
          : <Preloader />
      }
    </>
  )
});