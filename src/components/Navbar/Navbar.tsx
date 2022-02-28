import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
import classNames from 'classnames';


export const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink className={ ({ isActive }) => classNames(classes.link, {[classes.active]: isActive}) } to='/profile'>
             Profile
          </NavLink>
        </li>
        
        <li className={classes.item}>
          <NavLink className={ ({ isActive }) => classNames(classes.link, {[classes.active]: isActive}) } to='/dialogs'>
            Dialogs
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink className={ ({ isActive }) => classNames(classes.link, {[classes.active]: isActive}) } to='/news'>
            News
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink className={ ({ isActive }) => classNames(classes.link, {[classes.active]: isActive}) } to='/music'>
            Music
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink className={ ({ isActive }) => classNames(classes.link, {[classes.active]: isActive}) } to='/users'>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}