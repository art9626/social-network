import React, { ChangeEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import withShowError from '../../../../hoc/withShowError';
import { ProfileStatusSaveError } from '../../../../utils/errors/errors';

type PropsType = {
  userStatus: string;
  isOwner: boolean;
  setUserStatus: (text: string) => Promise<void>;
  showErrorMessage: (text: string) => void;
  errorMessage: string;
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({ userStatus, isOwner, setUserStatus, showErrorMessage, errorMessage }) => {

  // console.log('ProfileStatusWithHooks');

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(userStatus);

  useEffect(() => {
    setStatus(userStatus);
  }, [userStatus])

  const activateEditMode = () => {
    if (isOwner) {
      setEditMode(true)
    }
  };

  const deactivateEditMode = () => setEditMode(false);

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.target.value);

  const onBlurStatus = () => {
    deactivateEditMode();
    setUserStatus(status)
      .catch((err) => {
        if (err instanceof ProfileStatusSaveError) {
          showErrorMessage(err.message);
        } else {
          throw err;
        }
      });
  }

  return (
    <div>
      {
        errorMessage && <div>{errorMessage}</div>
      }
      {
        editMode
          ? <input
            autoFocus={true}
            onBlur={onBlurStatus}
            onChange={onChangeStatus}
            type="text"
            value={status}
          />
          : <span onDoubleClick={activateEditMode}>{userStatus || '---'}</span>
      }
    </div>
  )
}

export default withShowError(ProfileStatusWithHooks);