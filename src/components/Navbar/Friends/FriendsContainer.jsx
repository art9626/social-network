import React from 'react';
import Friends from './Friends';

const FriendsContainer = ({ store }) => {

  const state = store.getState();

  return (
      <Friends 
        friends={state.sidebar.friends}
      />
  );
  
}

export default FriendsContainer;