import PostsReducer from '../../src/Reducers/PostsReducer';

describe('ADD_POST Action', () => {
  const date = new Date().toUTCString()
  let state = {
    type: 'ADD_POST',
    id: 1,
    title: 'TESTING',
    content: 'TEST CONTENT'
  }
  it('should Return Empty Array', () => {
    let initialState = []
    expect(PostsReducer([], {})).toEqual(initialState)
  })
  it('should return new Post', () => {
    expect(PostsReducer([], state)).toEqual([
      {
        id: 1,
        title: 'TESTING',
        content: 'TEST CONTENT',
        date
      }
    ])
  })
})

describe('EDIT_POST Action',() =>{
  const date = new Date().toUTCString()
  it('should edit POST', () => {
    
    let state = {
      type: 'EDIT_POST',
      id: 1,
      title: 'EDITED',
      content: 'EDITED',
      date
    }
    let initialState = [
      {
        id: 1,
        title: 'TESTING',
        content: 'TEST CONTENT',
        date
      }
    ]
    expect(PostsReducer(initialState, state)).toEqual([
      {
        id: 1,
        title: 'EDITED',
        content: 'EDITED',
        date
      }
    ])
})
  it('should return initialState',()=>{
    let state = {
      type:'EDIT_POST',
      id:2,
      title:'EDITED TITLE',
      contnet: 'EDITED CONTENT',
      date
    }
    let initialState = [
      {
        id:1,
        title:'TEST',
        content:'Lorem Ipsum',
        date
      }
    ]
    expect(PostsReducer(initialState, state)).toEqual(initialState)
  })
})