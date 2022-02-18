import { RootStateType } from '../redux/reduxStore';
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import React from 'react';
import { IsAuthType } from '../redux/authReducer';


export const WithAuthRedirect = <P extends {userId: number | null}>(WrappedComponent: React.ComponentType<P>) => {

  const AuthRedirectComponent: React.FC<PropsType> = ({isAuth, ...props}) => {

    const location = useLocation();

    if (isAuth === 'notAuthorized') {
      return <Navigate to='/login' state={{ from: location.pathname }} />
    };

    return (
      <WrappedComponent {...props as P} />
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


  return connect<MapStatePropsType, MapDispatchPropsType, P, RootStateType>(mapStateToProps)(AuthRedirectComponent);
}