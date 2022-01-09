import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from '../../redux/authReducer';
import LoginForm from './LoginForm/LoginForm';


const Login = ({ isAuth, loginUser }) => {
  const onSubmit = (formData) => {
    loginUser(formData);
  };


  if (isAuth === 'authorized') return <Navigate to='/profile' />

  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </>
  )
}



const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
}

export default connect(mapStateToProps, { loginUser })(Login);