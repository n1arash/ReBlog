

let id = 1;

export default function PostReducer (state = [],action){
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: id++,
          title: action.title ,
          content: action.content ,
          date: new Date().toUTCString() ,
          }
        ]
    default:
      return [...state]

  }

}
