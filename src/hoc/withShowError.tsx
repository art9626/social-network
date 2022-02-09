import React from 'react';
import { useState } from 'react';

type InjectedPropsType = {
  showErrorMessage: (text: string) => void;
  errorMessage: string | null;
}

const withShowError = <WCP extends InjectedPropsType>(WrappedComponent: React.ComponentType<WCP>, timeout = 2000) => {
  
  const WithShowErrorComonent: React.FC<Omit<WCP, keyof InjectedPropsType>> = (props) => {

    // Делаем сообщение об ошибке через local state
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    // Будем хранить в local state номер таймера
    let [errorMessageTimerId, setErrorMessageTimerId] = useState<null | NodeJS.Timeout>(null);

    const showErrorMessage = (text: string) => {
      setErrorMessage(text);
      // Перед каждым запускам таймера обнуляем тот таймер, чей номер хранится в local state
      if (errorMessageTimerId !== null) {
        clearTimeout(errorMessageTimerId);
      }
      // При запуски таймера создаем новый timerId
      errorMessageTimerId = setTimeout(() => {
        setErrorMessage(null);
      }, timeout);
      // Новый номер таймера сохраняем в local state
      setErrorMessageTimerId(errorMessageTimerId);
    }


    return (
      <WrappedComponent {...props as WCP} showErrorMessage={showErrorMessage} errorMessage={errorMessage} />
    );
  }

  return WithShowErrorComonent;
}

export default withShowError;