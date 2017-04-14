import {addPost,editPost,deletePost,getPosts} from '../../src/actions/actions';


describe('ADD_POST Action Creator !', ( ) => {
    it('should return post Object', ()=>{
        let Post = { type: 'ADD_POST', title: 'TEST', content:'TEST' }
        expect(addPost('TEST','TEST')).toEqual(Post)
    })
    it('should return undefined ',() =>{
        expect(addPost(123,12321)).toEqual()
        expect(addPost(undefined,[])).toEqual()
    })
})

describe('EDIT_POST Action Creator',()=>{
    it('should return EDITED POST',() => {
        expect(editPost(1,'EDITED','EDITED')).toEqual({
            type:'EDIT_POST',
            id:1,
            title:'EDITED',
            content: 'EDITED'
        })
        expect(editPost(2,'TEST','TEST')).toEqual({
            type:'EDIT_POST',
            id:2,
            title:'TEST',
            content:'TEST'
        })
    })
    it('should return undefined',()=>{
      expect(editPost("a", [],{})).toBe(undefined)
      expect(editPost(1, 2, 4)).toBe(undefined)
      expect(editPost(null, null, undefined)).toBe(undefined)
    })

})

describe('DELETE_POST Action Creator',() => {
  it('should DELETE a postById',()=> {
    expect(deletePost(1)).toEqual({
      type: 'DELETE_POST',
      id: 1
    })
  })
  it('should return undefined',()=>{
    expect(deletePost('id')).toBe(undefined)
    expect(deletePost(null)).toBe(undefined)
    expect(deletePost()).toBe(undefined)
    expect(deletePost([])).toBe(undefined)
    expect(deletePost({})).toBe(undefined)
  })
})


describe('GET_POST Action Creator', () =>{
  it('should return a Object', ()=>{
    expect(getPosts()).toEqual({type:'GET_POST'})
  })
})
