import React from 'react';
import { NavLink } from 'react-router-dom';
import { InitialStateType } from '../../redux/authReducer';
import classes from './Header.module.css'

type PropsType = {
  userData: InitialStateType;
  logoutUser: () => void;
}

const Header: React.FC<PropsType> = ({ userData, logoutUser }) => {
  return (
    <header className={classes.header}>
      <img className={classes.img} src="https://i.imgur.com/BrIpiK6.png" />
      <div>
        {
          userData.isAuth === 'authorized'
            ? <div>
              <span> {userData.login} ({userData.email}) </span>
              <button onClick={logoutUser}>Exit</button>
            </div>
            : <NavLink to='/login'>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;