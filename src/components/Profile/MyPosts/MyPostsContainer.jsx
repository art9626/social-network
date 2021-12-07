import React from 'react';
import { addPostCreateAction, updatePostTextCreateAction } from '../../../redux/profilePageReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  return <StoreContext.Consumer>
      {
        store => {
          const state = store.getState();

          const addPost = () => {
            store.dispatch(addPostCreateAction());
          }
        
          const updateNewPostText = (text) => {
            store.dispatch(updatePostTextCreateAction(text));
          }

          return (
            <MyPosts 
              addPost={addPost}
              updateNewPostText={updateNewPostText} 
              posts={state.profilePage.posts} 
              newPostText={state.profilePage.newPostText} 
            />
          );
        }
      }
    </StoreContext.Consumer>
}

export default MyPostsContainer;