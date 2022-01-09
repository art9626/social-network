import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = ({ userData, logoutUser }) => {
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