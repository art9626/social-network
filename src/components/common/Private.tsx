import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsAuth } from '../../redux/authSelecrors';


export const Privat: React.FC = ({ children }) => {

  const isAuth = useSelector(getIsAuth);
  const location = useLocation();

  if (isAuth === 'notAuthorized') {
    return <Navigate to='/login' state={{ from: location.pathname }} />
  };

  return (
    <>
      {children}
    </>
  );
}