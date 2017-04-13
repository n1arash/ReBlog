// @flow
import * as actionTypes from './actionTypes';

export const addPost = (title:string,content:string) : ?Object => {
  if(title !== '' && content !== '' && typeof title === 'string' && typeof content === 'string'){
    return {
      type: actionTypes.ADD_POST,
      title,
      content
    }
  }
   return ;
}

export const editPost = (id:number,title:string,content:string) : ?Object => {
  if(typeof title === 'string' && typeof id === 'number' && typeof content === 'string' ){
    if(title !== '' && content !== '' && id !== ''){
      return {
        type : actionTypes.EDIT_POST,
        id,
        title,
        content
      }
    }
  }
  retrun ;
}