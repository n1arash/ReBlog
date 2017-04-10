// @flow
import * as actionTypes from './actionTypes';

export const addPost = (title:string,content:string) : Object => {
  return {
    type: actionTypes.ADD_POST,
    title,
    content
  }
}
