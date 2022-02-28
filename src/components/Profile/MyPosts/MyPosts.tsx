import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormAction, reset } from 'redux-form';
import { actions, PostType } from '../../../redux/profilePageReducer';
import { getPosts } from '../../../redux/profileSelecrors';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm';
import Post from './Post/Post';

export type NewPostMessageType = {
  newPost: string;
}

export const MyPosts: React.FC = React.memo(() => {
  const posts = useSelector(getPosts);

  const dispatch = useDispatch();

  const addPost = (text: string) => dispatch(actions.addPost(text));
  const resetForm = (form: string) => dispatch(reset(form));



  const addNewPost = (values: NewPostMessageType) => {
    addPost(values.newPost);
    resetForm('profileAddNewPostForm');
  }

 

  return (
    <div>
      <AddNewPostForm onSubmit={addNewPost} />
      <ul>
        {
          posts.map((item: PostType) => <Post key={item.id} message={item.message} likeCount={item.likesCount} />)
        }
      </ul>
    </div>
  );
});
