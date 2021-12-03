import React from 'react';
import { addPostCreateAction, updatePostTextCreateAction } from '../../../redux/profilePageReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, dispatch, newPostText }) => {
  const postsElements = posts
    .map(item => <Post key={item.id} message={item.message} likeCount={item.likesCount} />)

  const onAddPost = () => {
    dispatch(addPostCreateAction());
  }

  const onChangePost = (e) => {
    dispatch(updatePostTextCreateAction(e.target.value));
  }

  return (
    <div>
      <div className={classes.postInput}>
        <textarea onChange={onChangePost} value={newPostText} />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <ul>
        { postsElements }
      </ul>
    </div>
  );
}

export default MyPosts;