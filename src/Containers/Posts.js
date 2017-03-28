
import {connect} from 'react-redux';
import PostList from '../Components/PostList'

const mapStateToPostProps = (state) => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToPostProps,null)(PostList)
