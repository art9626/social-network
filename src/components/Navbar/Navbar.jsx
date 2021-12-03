import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Navbar.module.css'

const Navbar = ({sidebar}) => {

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
          <NavLink className={({ isActive }) => isActive ? activeClass : classes.link } to='/friends'>
            Friends
          </NavLink>
          <Friends friends={sidebar.friends} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;