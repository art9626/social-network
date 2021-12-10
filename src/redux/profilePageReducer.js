const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT ='UPDATE-POST-TEXT';

export const addPostCreateAction = () => ({ type: ADD_POST });
export const updatePostTextCreateAction = (text) => ({ type: UPDATE_POST_TEXT, text });

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 10},
    {id: 2, message: 'Its my first post', likesCount: 15},
    {id: 3, message: 'Da', likesCount: 120},
    {id: 4, message: 'Ok, its cool', likesCount: 110},
    {id: 5, message: ';)', likesCount: 40},
  ],
  newPostText: '',
}

const profilePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      const postText = state.newPostText

      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: postText,
            likesCount: 0,
          }
        ],
        newPostText: '',
      };
    }
      

    case UPDATE_POST_TEXT: {
      return {...state, newPostText: action.text};
    }
  
    default:
      return state;
  }
}

export default profilePageReducer;