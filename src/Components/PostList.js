import React ,{PropTypes} from 'react';

const getPost = (posts,match) => {
  return posts.filter(post => Number(match.params.id) === post.id)
}


const ShowPost = ({posts,match}) => {
  let post = getPost(posts,match);
  return (<div>
    {post.map(p =>{
      return(<div key={p.id}>
        <h1>{p.title}</h1>
        <legend>
          <p>{p.content}</p>
        </legend>
        <small>Created At: {p.date.toUTCString()}</small>
      </div>)
    })}
</div>)

}

ShowPost.propTypes = {
  posts: PropTypes.array
}

export default ShowPost;
