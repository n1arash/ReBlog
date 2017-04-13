import {addPost,editPost} from '../../src/actions/actions';


describe('ADD_POST Action !', ( ) => {
    it('should return post Object', ()=>{
        let Post = { type: 'ADD_POST', title: 'TEST', content:'TEST' }
        expect(addPost('TEST','TEST')).toEqual(Post)
    })
    it('should return undefined ',() =>{
        expect(addPost(123,12321)).toEqual()
        expect(addPost(undefined,[])).toEqual()
    })
})

describe('EDIT_POST Action',()=>{
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
})