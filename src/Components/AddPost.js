import React from 'react';
import {connect} from 'react-redux';



const AddPost = ({ dispatch }) => {
  let title;
  let content;
  return (<form onSubmit={e => {
    e.preventDefault();
    if (!title.value.trim() && ! content.value.trim()){
      return
    }
    dispatch({
      type:'ADD_POST',
      title : title.value,
      content: content.value
    })
    title.value= '';
    content.value = '';
    alert('Post Successfully Added')
  }}>
    <input ref={node => title = node} type="text" /><br />
    <textarea ref={node => content = node} cols="20" rows="7" placeholder="Type Your Content"></textarea><br />
    <button type="submit">AddPost</button>
  </form>)
}

export default connect()(AddPost)
