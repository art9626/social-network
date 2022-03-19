import React, { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Error from './components/common/Error/Error';
import { Layout } from './components/Layout/Layout';
import { Privat } from './components/common/Private';
import { initAppThunk } from './redux/appReducer';
import { getInit } from './redux/appSelectors';
import { getAuth } from './redux/authSelecrors';
import { LinearProgress, } from '@mui/material';
import { ColorTheme } from './components/common/ColorTheme';


const DialogsPage = lazy(() => import('./components/Dialogs/DialogsPage'));
const LoginPage = lazy(() => import('./components/Login/LoginPage'));
const ProfilePage = lazy(() => import('./components/Profile/ProfilePage'));
const UsersPage = lazy(() => import('./components/Users/UsersPage'));
const ChatPage = lazy(() => import('./components/Chat/ChatPage'));
const Music = lazy(() => import('./components/Music/Music'));
const News = lazy(() => import('./components/News/News'));



const App: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const init = useSelector(getInit);
  const auth = useSelector(getAuth);

  const dispatch = useDispatch();

  const initApp = () => dispatch(initAppThunk());

  const catchUnhandledErrors = (e: PromiseRejectionEvent) => {
    setErrorMessage(e.reason.message);
  }

  useEffect(() => {
    initApp();
    window.addEventListener('unhandledrejection', catchUnhandledErrors);

    return () => window.removeEventListener('unhandledrejection', catchUnhandledErrors);
  }, [])

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (errorMessage) {
      timerId = setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [errorMessage]);



  if (!init) return <LinearProgress color='primary' />;

  return (
    <ColorTheme>
      {
        errorMessage && <Error errorMessage={errorMessage} />
      }

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={auth.isAuth === 'authorized' ? <Navigate to='/profile' /> : <div>Registration</div>} />
          <Route path='login' element={<LoginPage />} />
          <Route
            path='profile/'
            element={
              <Privat>
                <ProfilePage />
              </Privat>
            }
          />
          <Route
            path='profile/:id'
            element={
              <Privat>
                <ProfilePage />
              </Privat>
            }
          />
          <Route
            path='dialogs/*'
            element={
              <Privat>
                <DialogsPage />
              </Privat>
            }
          />
          <Route
            path='chat'
            element={
              <Privat>
                <ChatPage />
              </Privat>
            }
          />
          <Route path='users' element={<UsersPage />} />
          <Route path='news' element={<News />} />
          <Route path='music' element={<Music />} />
          <Route path='*' element={<div>Error 404 Page not found</div>} />
        </Route>
      </Routes>
    </ColorTheme>
  );
}

export default App;