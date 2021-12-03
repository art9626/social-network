import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css'


const DialogItem = props => {
  return (
    <li className={classes.item}>
      <NavLink to={`/dialogs/${props.id}`}>
        {props.name}
      </NavLink>
    </li>
  );
}

export default DialogItem;