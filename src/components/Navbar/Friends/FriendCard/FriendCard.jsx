import React from 'react';
import classes from './FriendCard.module.css'

const FriendCard = props => {
  return (
    <li className={classes.item}>
      {props.name}
    </li>
  );
}

export default FriendCard;