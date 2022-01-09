import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import authReducer from './authReducer';
import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import sidebarReducer from './sidebarReducer';
import usersPageReducer from './usersPageReducer';
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sidebar: sidebarReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;