import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'Its my first post', likesCount: 15},
        {id: 3, message: 'Da', likesCount: 120},
        {id: 4, message: 'Ok, its cool', likesCount: 110},
        {id: 5, message: ';)', likesCount: 40},
      ],
      newPostText: '',
    },
  
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Aaaa'},
        {id: 2, name: 'Bbb'},
        {id: 3, name: 'Ccc'},
      ],
      messages: [
        {id: 1, message: 'Hey!', status: 'from'},
        {id: 2, message: 'How are you?', status: 'from'},
        {id: 3, message: 'Im ok)', status: 'to'},
      ],
      newMessageText: '',
    },
  
    sidebar: {
      friends:[
        {id: 1, name: 'Aaaa'},
        {id: 2, name: 'Bbb'},
        {id: 3, name: 'Ccc'}
      ],
    },
  },

  
  _callSubscriber: null,
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  getState() {
    return this._state;
  },


  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber();
  },
}

export default store;