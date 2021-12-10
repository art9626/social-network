import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import classes from './Navbar.module.css'

const Navbar = () => {

  const activeClass = `${classes.active} ${classes.link}`;
  
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink className={({ isActive }) => isActive ? activeClass : classes.link } to='/profile'>
             Profile
          </NavLink>
        </li>
        
        <li className={classes.item}>
          <NavLink className={({ isActive }) => isActive ? activeClass : classes.link } to='/dialogs'>
            Dialogs
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink className={({ isActive }) => isActive ? activeClass : classes.link } to='/news'>
            News
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink className={({ isActive }) => isActive ? activeClass : classes.link } to='/music'>
            Music
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink className={({ isActive }) => isActive ? activeClass : classes.link } to='/users'>
            Users
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink className={({ isActive }) => isActive ? activeClass : classes.link } to='/friends'>
            MyFriends
          </NavLink>
          <FriendsContainer />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;