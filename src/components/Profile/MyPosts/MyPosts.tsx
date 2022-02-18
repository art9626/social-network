import React from 'react';
import { FormAction } from 'redux-form';
import { PostType } from '../../../redux/profilePageReducer';
import { AddPostType } from '../Profile';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm';
import Post from './Post/Post';

type PropsType = {
  posts: Array<PostType>;
  addPost: AddPostType;
  resetForm: (form: string) => FormAction;
}

export type NewPostMessageType = {
  newPost: string;
}

const MyPosts: React.FC<PropsType> = ({ posts, addPost, resetForm }) => {

  const postsElements = posts
    .map((item: PostType) => <Post key={item.id} message={item.message} likeCount={item.likesCount} />)


  const addNewPost = (values: NewPostMessageType) => {
    addPost(values.newPost);
    resetForm('profileAddNewPostForm');
  }

 

  return (
    <div>
      <AddNewPostForm onSubmit={addNewPost} />
      <ul>
        {postsElements}
      </ul>
    </div>
  );
}


export default React.memo(MyPosts);