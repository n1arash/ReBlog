
import {connect} from 'react-redux';
import PostList from '../Components/PostList'


const mapStateToPostProps = (state,ownProps) => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToPostProps,null)(PostList)
