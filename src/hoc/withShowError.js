import React from 'react';
import { useState } from 'react';

const withShowError = (Component, timeout = 2000) => {
  return (props) => {
    // Делаем сообщение об ошибке через local state
    const [errorMessage, setErrorMessage] = useState(null);
    // Будем хранить в local state номер таймера
    let [errorMessageTimerId, setErrorMessageTimerId] = useState(null);

    const showErrorMessage = (text) => {
      setErrorMessage(text);
      // Перед каждым запускам таймера обнуляем тот таймер, чей номер хранится в local state
      clearInterval(errorMessageTimerId);
      // При запуски таймера создаем новый timerId
      errorMessageTimerId = setTimeout(() => {
        setErrorMessage(null);
      }, timeout);
      // Новый номер таймера сохраняем в local state
      setErrorMessageTimerId(errorMessageTimerId);
    }


    return (
      <Component {...props} showErrorMessage={showErrorMessage} errorMessage={errorMessage} />
    );
  }
}

export default withShowError;