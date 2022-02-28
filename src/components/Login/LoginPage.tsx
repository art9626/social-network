import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { LoginFormDataType, loginUserThunk } from '../../redux/authReducer';
import { getCaptchaUrl, getIsAuth } from '../../redux/authSelecrors';
import LoginForm from './LoginForm/LoginForm';

const LoginPage: React.FC = React.memo(() => {
  const isAuth = useSelector(getIsAuth);
  const captchaUrl = useSelector(getCaptchaUrl);
  const state = useLocation().state as { from: string };
  const dispatch = useDispatch();

  const loginUser = (formData: LoginFormDataType) => dispatch(loginUserThunk(formData));


  const onSubmit = (formData: LoginFormDataType) => {
    loginUser(formData);
  };

  const fromPage = state?.from || '/profile';



  if (isAuth === 'authorized') return <Navigate to={fromPage} />;
  
  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </>
  );
});

export default LoginPage;
