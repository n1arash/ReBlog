import { connect } from 'react-redux';
import HomePage from '../Components/HomePage'


const mapStateToProps = (state) =>{
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps,null)(HomePage)
