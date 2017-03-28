import React,{PropTypes} from 'react';
import {Link} from 'react-router-dom';


const Post = ({id,title,content,match}) => {
  return(<div key={id}>
    <h2><Link to={`/posts/${title}`} >{title}</Link></h2>
    <hr />
  </div>)
}

Post.propTypes = {
  key: PropTypes.any,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post
