import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

const App = ({ store }) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar store={store} />
      <div className='app-content-wrapper'>

        <Routes>
          <Route
            path='/profile'
            element={<Profile
              store={store}
            />}
          />

          <Route
            path='/dialogs/*'
            element={<DialogsContainer
              store={store}
            />}
          />

          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
