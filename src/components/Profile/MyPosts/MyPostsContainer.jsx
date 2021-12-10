import { connect } from 'react-redux';
import { addPostCreateAction, updatePostTextCreateAction } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostCreateAction()),
    updateNewPostText: (text) => dispatch(updatePostTextCreateAction(text)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;