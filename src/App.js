import React, { Component} from 'react';
import Posts from './Containers/Posts';
import AddPost from './Components/AddPost'
import IndexPost from './Containers/IndexPost'
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'



class App extends Component {
  render() {
    return (<div>
      <h2>React Redux Blog</h2>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Posts</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>

          <hr/>
          <Route exact path="/" component={IndexPost}/>

          <Route path="/posts/:id" component={Posts}/>

          <Route path="/add" component={AddPost}/>
        </div>
      </Router>
    </div>);
  }
}

export default App;
