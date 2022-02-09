import { RootStateType } from '../redux/reduxStore';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import React from 'react';
import { IsAuthType } from '../redux/authReducer';


export const WithAuthRedirect = <WCP,>(WrappedComponent: React.ComponentType<WCP>) => {

  const AuthRedirectComponent: React.FC<PropsType> = ({isAuth, ...props}) => {
    if (isAuth === 'notAuthorized') {
      return <Navigate to='/login' />
    };

    return (
      <WrappedComponent {...props as WCP} />
    );
  }


  const mapStateToProps = (state: RootStateType) => {
    return {
      isAuth: state.auth.isAuth,
    }
  }

  type MapStatePropsType = {
    isAuth: IsAuthType;
  }

  type MapDispatchPropsType = {}

  type PropsType = MapStatePropsType & MapDispatchPropsType;


  return connect<MapStatePropsType, MapDispatchPropsType, WCP, RootStateType>(mapStateToProps)(AuthRedirectComponent);
}