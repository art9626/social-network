import React, { ChangeEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SetErrorType } from '../../Profile';

type PropsType = {
  userStatus: string;
  isOwner: boolean;
  setUserStatus: (text: string) => void;
  errorMessage: string | null;
  setError: SetErrorType;
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({
  userStatus,
  isOwner,
  setUserStatus,
  errorMessage,
  setError
}) => {

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

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setError(null, 'onSetStatusErrorMessage');
    }
    setStatus(e.target.value)
  };

  const onBlurStatus = () => {
    deactivateEditMode();
    setUserStatus(status)
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

export default ProfileStatusWithHooks;