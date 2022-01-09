import React from 'react';
// import { connect } from 'react-redux';
// import { reset } from 'redux-form';
// import { addPostAC } from '../../../redux/profilePageReducer';
// import { getPosts } from '../../../redux/profileSelecrors';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm';
import Post from './Post/Post';



const MyPosts = ({ posts, addPost, resetForm }) => {

  console.log('MyPosts');

  const postsElements = posts
    .map(item => <Post key={item.id} message={item.message} likeCount={item.likesCount} />)


  const addNewPost = (values) => {
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




// class MyPosts extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.postsElements = this.props.posts
//       .map(item => <Post key={item.id} message={item.message} likeCount={item.likesCount} />)

//     this.addNewPost = this.addNewPost.bind(this);
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({a: 17})
//     }, 3000)
//   }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   // if (nextProps.posts === this.props.posts && nextState === this.state) return false;
//   //   // return true;

//   //   return nextProps.posts !== this.props.posts || nextState !== this.state
//   // }

//   addNewPost(values) {
//     this.props.addPost(values.newPost);
//     this.props.resetForm('profileAddNewPostForm');
//   }

//   render() {

//     console.log('MyPosts');

//     return (
//       <div>
//         <AddNewPostForm onSubmit={this.addNewPost} />
//         <ul>
//           {this.postsElements}
//         </ul>
//       </div>
//     );
//   }
// }






// export default MyPosts;



export default React.memo(MyPosts);



// const mapStateToProps = (state) => {

//   // console.log('map MyPost');

//   return {
//     posts: getPosts(state),
//   }
// }

// export default connect(mapStateToProps, { reset, addPostAC })(MyPosts);