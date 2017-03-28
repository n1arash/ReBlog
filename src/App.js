import React, { Component } from 'react';
import Posts from './Containers/Posts';
import AddPost from './Components/AddPost'
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
          </ul>

          <hr/>
          <Route exact path="/" component={Posts} />
          <Route path="/add" component={AddPost}/>
        </div>
      </Router>
    </div>);
  }
}

export default App;
