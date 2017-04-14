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

describe('DELETE_POST Action', () => {
    const date = new Date().toUTCString()
    it('should DELETE a POST', () => {
      let state = [
        {
        id: 1,
        title : "TEST",
        content : 'LOREM',
        date
      },
      {
        id:2 ,
        title:"TEST2",
        content : "LOREM",
        date
      }
    ]
        expect(PostsReducer(state, {type : 'DELETE_POST', id : 2})).toEqual([
        {
          id:1,
          title:"TEST",
          content: "LOREM",
          date
        }
      ])
        expect(PostsReducer(state, {type : 'DELETE_POST', id : 1})).toEqual([
        {
          id:2,
          title:"TEST2",
          content: "LOREM",
          date
        }
      ])
    })
    it('should return initialState', () => {
      expect(PostsReducer([{id:1,title:'X',content:'X',date}], {type:'DELETE_POST',id:2})).toEqual([
        {
        id:1,
        title:'X',
        content:'X',
        date
        }
       ])
    })
})

describe('GET_POST Action',() => {
  const date = new Date().toUTCString();
  it('should return all posts',() => {
    let initialState = [
      {
        id:1,
        title:'TEST',
        content:'Lorem',
        date
      },
      {
        id:2,
        title:'TEST2',
        content:'Lorem',
        date
      },
      {
        id:3,
        title:'TEST3',
        content:'Lorem',
        date
      },
      {
        id:4,
        title:'TEST4',
        content:'Lorem',
        date
      }
    ]
    expect(PostsReducer(initialState, {type: 'GET_POST'})).toEqual(initialState)
  })
  it('should return empty array',() => {
    expect(PostsReducer([], {type:'GET_POST'})).toEqual([])
  })
});
