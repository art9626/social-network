import { Alert, Box, Button, IconButton, Skeleton, Snackbar } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userIcon from '../../../../assets/images/user-icon.jpeg'
import { actions, setPhotoThunk, UserProfileType } from '../../../../redux/profilePageReducer';
import { getErrorMessages, getInWaiting } from '../../../../redux/profileSelecrors';
import CloseIcon from '@mui/icons-material/Close';

type PropsType = {
  userProfile: UserProfileType;
  isOwner: boolean;
}



export const ProfilePhoto: React.FC<PropsType> = ({ isOwner, userProfile }) => {
  const inWaiting = useSelector(getInWaiting);
  const errorMessages = useSelector(getErrorMessages);
  const { photos } = userProfile;
  const errorMessage = errorMessages.onSetPhotoErrorMessage;

  const dispatch = useDispatch()

  const setPhoto = (photo: File) => dispatch(setPhotoThunk(photo));
  const setError = (errorText: string | null, errorName: string) => dispatch(actions.setError(errorText, errorName));

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null, 'onSetPhotoErrorMessage');
  };


  const onChooseFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  }


  return (
    <Box
      sx={{ pb: 3 }}
    >
      {
        errorMessage
          && <Snackbar
              open={true}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert onClose={handleClose} severity="error">
                {errorMessage}
              </Alert>
            </Snackbar>
      }
      {
        inWaiting
          ? <Skeleton
              sx={{ mb: 2 }} variant='rectangular'
              width={300}
              height={300}
            />
          : <Box
              sx={{ mb: 2, fontSize: 0 }}
            >
              <img
                src={photos.large || userIcon}
                style={{ width: '300px', height: '300px' }}
                alt='User photo'
              />
            </Box>
      }
      {
        isOwner
          && <label htmlFor='uploadPhoto'>
              <input
                style={{ display: 'none' }}
                id='uploadPhoto'
                type='file'
                onChange={onChooseFile}
              />

              <Button 
                color='primary' 
                variant='contained' 
                component='span' 
                disabled={inWaiting}
              >
                Upload photo
              </Button>
            </label>
      }
    </Box>
  );
}