import React from 'react';
import FriendCard from './FriendCard/FriendCard';
import classes from './Friends.module.css'

const Friends = props => {
  const friendsCards = props.friends.map(item => <FriendCard name={item.name} key={item.id} />);

  return (
      <ul className={classes.list}>
        {friendsCards}
      </ul>
  );
  
}

export default Friends;