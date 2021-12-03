const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT ='UPDATE-POST-TEXT';

export const addPostCreateAction = () => ({ type: ADD_POST });
export const updatePostTextCreateAction = (text) => ({ type: UPDATE_POST_TEXT, text });

const profilePageReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1, 
        message: state.newPostText, 
        likesCount: 0,
      }

      state.posts.push(newPost);
      state.newPostText = '';
        
      return state;

    case UPDATE_POST_TEXT:
      state.newPostText = action.text;
      return state;
  
    default:
      return state;
  }
}

export default profilePageReducer;