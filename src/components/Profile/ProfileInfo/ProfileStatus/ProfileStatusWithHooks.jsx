import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const activateEditMode = () => {
    if (props.myId === props.userId) {
      setEditMode(true)
    }
  };
  const deactivateEditMode = () => setEditMode(false);
  const onChangeStatus = (e) => setStatus(e.target.value);
  const onBlurStatus = () => {
    deactivateEditMode();
    props.setStatus(status);
  }

    return (
      <>
        {
          editMode
            ? <input
              autoFocus={true}
              onBlur={onBlurStatus}
              onChange={onChangeStatus} 
              type="text"
              value={status === null ? '' : status}
            />
            : <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
        }
      </>
    )
}

export default ProfileStatusWithHooks;