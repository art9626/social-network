import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { LoginFormDataType, loginUser } from '../../redux/authReducer';
import { getCaptchaUrl, getIsAuth } from '../../redux/authSelecrors';
import { RootStateType } from '../../redux/reduxStore';
import LoginForm from './LoginForm/LoginForm';

type PropsType = ConnectedProps<typeof connector>;

const Login: React.FC<PropsType> = ({ isAuth, loginUser, captchaUrl }) => {

  const state = useLocation().state as { from: string };

  const fromPage = state.from || '/profile';

  const onSubmit = (formData: LoginFormDataType) => {
    loginUser(formData);
  };


  if (isAuth === 'authorized') return <Navigate to={fromPage} />;


  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </>
  )
}



const mapStateToProps = (state: RootStateType) => {
  return {
    isAuth: getIsAuth(state),
    captchaUrl: getCaptchaUrl(state),
  };
}

const connector = connect(mapStateToProps, { loginUser });

export default connector(Login);