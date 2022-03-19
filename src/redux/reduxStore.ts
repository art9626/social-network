import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import authReducer from './authReducer';
import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import usersPageReducer from './usersPageReducer';
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form'
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
  chat: chatReducer,
});

// Создание store с расширением Redux Devtools
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// Создание store
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));


// Определяем тип state по возвращаемому объекту из метода getState
export type RootStateType = ReturnType<typeof store.getState>

// Определяем тип state по возвращаемому объекту из функции rootReducer 
// (возвращает она тоже самое, что и метот getState, потому что rootReducer - это функция принимающая глобальный state и возвращающая его)
// export type RootStateType = ReturnType<typeof rootReducer>



// Динамически определяем тип actions
// type InferActionCreatersType<T> = T extends {[key: string]: infer U} ? U : never;
// export type InferActionsType<T extends {[key: string]: (...arg: any) => any}> = ReturnType<InferActionCreatersType<T>>;

// То же самое в укороченной записи
export type InferActionsType<T> = T extends {[key: string]: (...arg: any) => infer U} ? U : never;


export default store;