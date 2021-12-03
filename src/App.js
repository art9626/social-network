import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

const App = ({ state, dispatch }) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar sidebar={state.sidebar} />
      <div className='app-content-wrapper'>
          <Routes>

            <Route 
              path='/profile' 
              element={<Profile 
                profilePage={state.profilePage} 
                dispatch={dispatch}
             />} 
            />

            <Route 
              path='/dialogs/*' 
              element={<Dialogs 
                dialogsPage={state.dialogsPage}
                dispatch={dispatch}
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
