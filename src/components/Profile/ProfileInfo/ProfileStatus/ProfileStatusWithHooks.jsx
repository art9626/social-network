import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import withShowError from '../../../../hoc/withShowError';

const ProfileStatusWithHooks = ({ userStatus, isOwner, setUserStatus, showErrorMessage, errorMessage }) => {

  // console.log('ProfileStatusWithHooks');

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(userStatus);

  // // Делаем сообщение об ошибке через local state
  // const [errorMessage, setErrorMessage] = useState(null);
  // // Будем хранить в local state номер таймера
  // let [errorMessageTimerId, setErrorMessageTimerId] = useState(null);

  // const showErrorMessage = (text) => {
  //   setErrorMessage(text);
  //   // Перед каждым запускам таймера обнуляем тот таймер, чей номер хранится в local state
  //   clearInterval(errorMessageTimerId);
  //   // При запуски таймера создаем новый timerId
  //   errorMessageTimerId = setTimeout(() => {
  //     setErrorMessage(null);
  //   }, 2000);
  //   // Новый номер таймера сохраняем в local state
  //   setErrorMessageTimerId(errorMessageTimerId);
  // }



  useEffect(() => {
    setStatus(userStatus);
  }, [userStatus])



  const activateEditMode = () => {
    if (isOwner) {
      setEditMode(true)
    }
  };

  const deactivateEditMode = () => setEditMode(false);

  const onChangeStatus = (e) => setStatus(e.target.value);

  const onBlurStatus = () => {
    deactivateEditMode();
    setUserStatus(status)
      .catch((err) => {
        if (err.name === 'ProfileStatusSaveError') {
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
            value={status === null ? '' : status}
          />
          : <span onDoubleClick={activateEditMode}>{userStatus || '---'}</span>
      }
    </div>
  )
}

export default withShowError(ProfileStatusWithHooks);