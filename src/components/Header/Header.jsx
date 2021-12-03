import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return ( 
    <header className={classes.header}>
      <img className={classes.img} src="https://eep.mitwork.kz/uploads/trudata/9417/18d5cb487d068bc9151183f1ee24992a.png"/>
    </header>
  )
}

export default Header;