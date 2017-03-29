import {combineReducers} from 'redux';
import PostReducer from './PostsReducer';


export default combineReducers({
    posts: PostReducer
  })
