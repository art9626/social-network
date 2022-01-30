import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css'

type PropsType = {
  id: number;
  name: string;
}

const DialogItem: React.FC<PropsType> = ({ id, name }) => {
  return (
    <li className={classes.item}>
      <NavLink to={`/dialogs/${id}`}>
        {name}
      </NavLink>
    </li>
  );
}

export default DialogItem;