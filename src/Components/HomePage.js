import React from 'react';
import { Link } from 'react-router-dom'


const HomePage = ({posts} ) : ?React$Element<any> => {
  return (<div>
    {
      posts.map((post:Object) =>{
        return (<div key={post.id}><h1><Link to={`/posts/${post.id}`}>{post.title}</Link></h1>
        <hr /></div>)
      })
    }
  </div>)
}

export default HomePage
