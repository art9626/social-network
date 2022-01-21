import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Error from './components/common/Error/Error';
import Preloader from './components/common/Preloader/Preloader';
import Layout from './components/Layout/Layout';
import { initApp } from './redux/appReducer';
import { getAuth } from './redux/authSelecrors';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = lazy(() => import('./components/Login/Login'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Music = lazy(() => import('./components/Music/Music'));
const News = lazy(() => import('./components/News/News'));


class App extends React.Component {
  constructor(props) {
    super(props);
    this.errorMessageTimerId = null
    this.state = {
      errorMessage: null
    }
    this.catchUnhandledErrors = this.catchUnhandledErrors.bind(this);
  }

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
  catchUnhandledErrors(e) {
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


const mapStateToProps = (state) => {
  return {
    init: state.app.init,
    auth: getAuth(state),
  }
}

export default connect(mapStateToProps, { initApp })(App);
