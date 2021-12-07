import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, addPost,updateNewPostText, newPostText }) => {
  const postsElements = posts
    .map(item => <Post key={item.id} message={item.message} likeCount={item.likesCount} />)

  const onAddPost = () => {
    addPost();
  }

  const onChangePost = (e) => {
   updateNewPostText(e.target.value);
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