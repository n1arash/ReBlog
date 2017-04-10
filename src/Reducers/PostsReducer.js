// @flow
import * as actionTypes from '../actions/actionTypes';

let id : number = 1;

type Action = {
  id: number,
  type: string,
  title: string,
  content: string,
  date: string
}


export default function PostReducer (state : Array<Object> = [],action: Action ){
  switch (action.type) {
    case actionTypes.ADD_POST:
      return [
        ...state,
        {
          id: id++,
          title: action.title ,
          content: action.content ,
          date: new Date().toUTCString() ,
          }
        ]

    case actionTypes.EDIT_POST:
      return state.map((item:Object,index:number) : Object =>{
        if(item.id !== action.id){
          return item
        }
        return {...item,
            id: action.id,
            title:action.title,
            content:action.title,
            date: new Date().toUTCString()
           }
      })

    default:
      return [...state]

  }

}
