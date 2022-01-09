import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Preloader from './components/common/Preloader/Preloader';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// import Login from './components/Login/Login';
// import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
// import News from './components/News/News';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import UsersContainer from './components/Users/UsersContainer';
import { initApp } from './redux/appReducer';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = lazy(() => import('./components/Login/Login'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Music = lazy(() => import('./components/Music/Music'));
const News = lazy(() => import('./components/News/News'));


class App extends React.Component {

  componentDidMount() {
    this.props.initApp();
  }

  render() {

    // console.log('App');

    if (!this.props.init) return <Preloader />


    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-content-wrapper'>

          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route
                path='/login'
                element={<Login />}
              />

              <Route
                path='/profile/:userId'
                element={<ProfileContainer />}
              />

              <Route
                path='/profile'
                element={<ProfileContainer />}
              />

              <Route
                path='/dialogs/*'
                element={<DialogsContainer />}
              />

              <Route
                path='/users'
                element={<UsersContainer />}
              />

              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
            </Routes>
          </Suspense>

        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    init: state.app.init,
  }
}

export default connect(mapStateToProps, { initApp })(App);


// const App = () => {
//   console.log('App');
//   return (
//     <div className='app-wrapper'>
//       <HeaderContainer />
//       <Navbar />
//       <div className='app-content-wrapper'>

//         <Routes>
//           <Route
//             path='/login'
//             element={<Login />}
//           />

//           <Route
//             path='/profile/:userId'
//             element={<ProfileContainer />}
//           />

//           <Route
//             path='/profile'
//             element={<ProfileContainer />}
//           />

//           <Route
//             path='/dialogs/*'
//             element={<DialogsContainer />}
//           />

//           <Route
//             path='/users'
//             element={<UsersContainer />}
//           />

//           <Route path='/news' element={<News />} />
//           <Route path='/music' element={<Music />} />
//         </Routes>

//       </div>
//     </div>
//   );
// }

// export default App;