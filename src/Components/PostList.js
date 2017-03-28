import React ,{PropTypes} from 'react';
import Post from './Post'

const ShowPost = ({posts}) => {
  return (<div>
    {posts.map(post => {
      return (<div key={post.id}>
        <Post id={post.id} title={post.title} content={post.content} />
      </div>)
    })
  }</div>)

}

ShowPost.propTypes = {
  posts: PropTypes.array
}

export default ShowPost;
