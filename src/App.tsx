import React, { lazy } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Error from './components/common/Error/Error';
import Preloader from './components/common/Preloader/Preloader';
import Layout from './components/Layout/Layout';
import { initApp } from './redux/appReducer';
import { getInit } from './redux/appSelectors';
import { getAuth } from './redux/authSelecrors';
import { RootStateType } from './redux/reduxStore';


// @ts-ignore
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = lazy(() => import('./components/Login/Login'));
// @ts-ignore
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Music = lazy(() => import('./components/Music/Music'));
const News = lazy(() => import('./components/News/News'));


type PropsType = ConnectedProps<typeof connector>;

type StateProps = {
  errorMessage: string | null;
}

class App extends React.Component<PropsType, StateProps> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      errorMessage: null
    }
    this.catchUnhandledErrors = this.catchUnhandledErrors.bind(this);
  }

  // Сделано все по документации и все работает, но почему то ts  выдает ошибку (в примере в документации тоже), из за этого ts-ignore
  // @ts-ignore
  errorMessageTimerId: ReturnType<typeof setTimeout>;

  componentDidMount() {
    this.props.initApp();
    // Перехватываем все не обработанные rejecton promises
    window.addEventListener('unhandledrejection', this.catchUnhandledErrors);
  }

  componentWillUnmount() {
    // При размонтировании удаляем обработчик события и зачищаем таймер
    clearTimeout(this.errorMessageTimerId);
    window.removeEventListener('unhandledrejection', this.catchUnhandledErrors);
  }

  // В данном месте сделата обработка ошибок всех сетевых запросов
  // Если любой из промисов вернул reject, сообщение о коде ошибки будет показано на экране
  // Обработка реализована через local state для более удобного управления timerId, создаваемым setTimeout
  catchUnhandledErrors(e: any) {
    this.setState({
      errorMessage: e.reason.message,
    })
    clearTimeout(this.errorMessageTimerId);
    this.errorMessageTimerId = setTimeout(() => {
      this.setState({
        errorMessage: null,
      })
    }, 2000)
  }


  render() {

    if (!this.props.init) return <Preloader />

    return (
      <div className='app-wrapper'>
        {
          this.state.errorMessage && <Error errorMessage={this.state.errorMessage} />
        }

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={this.props.auth.isAuth === 'authorized' ? <Navigate to='/profile' /> : <div>Registration</div>} />
            <Route path='login' element={<Login />} />
            <Route path='profile/:userId' element={<ProfileContainer />} />
            <Route path='profile' element={<ProfileContainer />} />
            <Route path='dialogs/*' element={<DialogsContainer />} />
            <Route path='users' element={<UsersContainer />} />
            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
            <Route path='*' element={<div>Error 404 Page not found</div>} />
          </Route>
        </Routes>
      </div>
    );
  }
}


const mapStateToProps = (state: RootStateType) => {
  return {
    init: getInit(state),
    auth: getAuth(state),
  }
}

const connector = connect(mapStateToProps, { initApp });

export default connector(App);
