import React from 'react';
import StoreContext from '../../../StoreContext';
import Friends from './Friends';

const FriendsContainer = () => {

  return <StoreContext.Consumer>
      {
        store => {
          const state = store.getState();

          return (
            <Friends 
              friends={state.sidebar.friends}
            />
          );
        }
      }
    </StoreContext.Consumer>

}

export default FriendsContainer;