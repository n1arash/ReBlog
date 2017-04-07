import PostsReducer from '../../src/Reducers/PostsReducer';

describe('PostsReducer.js Reducer',()=> {

  const date = new Date().toUTCString()
  let state = {
    type :'ADD_POST',
    id : 1,
    title: 'TESTING',
    content: 'TEST CONTENT',
}
  it('should Return Empty Array',() => {
      let initialState = []
      expect(PostsReducer([],{})).toEqual(initialState)
    })
  it('should return new Post',()=>{
    expect(PostsReducer([],state)).toEqual(
      [
        {
            id : 1,
            title: 'TESTING',
            content: 'TEST CONTENT',
            date
        }
      ]
    )
  })
})
