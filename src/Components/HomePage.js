import React from 'react';
import { Link } from 'react-router-dom'


const HomePage = ({posts}) => {
  return (<div>
    {
      posts.map(post =>{
        return (<div key={post.id}><h1><Link to={`/posts/${post.id}`}>{post.title}</Link></h1>
        <hr /></div>)
      })
    }
  </div>)
}

export default HomePage 
