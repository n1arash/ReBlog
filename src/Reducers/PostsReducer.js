

let id = 0;

export default function PostReducer (state=[],action){
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: id++,
          title: action.title ,
          content: action.content ,
          date: new Date() ,
          }
        ]
      case 'FIND_POST':
      return state.filter(post => {
        return post.id === action.id
      })
    default:
      return [...state]

  }

}
