import {combineReducers} from 'redux';
import PostReducer from './PostsReducer';
import {routerReducer} from 'react-router-redux';



export default combineReducers({
    router: routerReducer,
    posts:PostReducer
  })
