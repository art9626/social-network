import React, { MouseEvent, useEffect } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { ProfileDataForm } from './ProfileDataForm/ProfileDataForm';
import { actions, setProfileDataThunk, UserProfileType } from '../../../redux/profilePageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileInfoEditMode, getUserProfile } from '../../../redux/profileSelecrors';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';
import { Grid } from '@mui/material';
import { ProfilePhoto } from './ProfilePhoto/ProfilePhoto';

type PropsType = {
  isOwner: boolean;
}


export const ProfileInfo: React.FC<PropsType> = React.memo(({ isOwner }) => {

  const userProfile = useSelector(getUserProfile);
  const editMode = useSelector(getProfileInfoEditMode);

  const dispatch = useDispatch();

  const setProfileData = (data: UserProfileType) => dispatch(setProfileDataThunk(data));
  const setEditMode = (state: boolean, fieldName: string) => dispatch(actions.toggleEditMode(state, fieldName));

  useEffect(() => {
    return () => {
      setEditMode(false, 'profileInfoEditMode');
    };
  }, []);


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
          ? <Grid
              container
              sx={{ pt: 5 }}
            >
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <ProfilePhoto userProfile={userProfile} isOwner={isOwner} />
                <ProfileStatus isOwner={isOwner} />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
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
              </Grid>
            </Grid>

          : <Preloader />
      }
    </>
  )
});