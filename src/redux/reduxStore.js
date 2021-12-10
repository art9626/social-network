import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from "./usersPageReducer";

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sidebar: sidebarReducer,
  usersPage: usersPageReducer,
});

const store = createStore(reducers);

export default store;