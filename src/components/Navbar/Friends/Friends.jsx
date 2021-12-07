import React from 'react';
import FriendCard from './FriendCard/FriendCard';
import classes from './Friends.module.css'

const Friends = ({ friends }) => {
  const friendsCards = friends.map(item => <FriendCard name={item.name} key={item.id} />);

  return (
      <ul className={classes.list}>
        {friendsCards}
      </ul>
  );
  
}

export default Friends;