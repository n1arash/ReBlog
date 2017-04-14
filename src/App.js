'use strict'
import React, { Component} from 'react'
import Posts from './Containers/Posts'
import AddPost from './Components/AddPost'
import IndexPost from './Containers/IndexPost'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { Layout } from 'antd'

const { Content,Footer } = Layout

class App extends Component {
  render() {
    return (<div>
      <Router>
        <div>

      { /* Should Refactor Component*/}
      <Layout className="layout">
          <Navbar />
        <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
              <Route exact path="/" component={IndexPost}/>
              <Route path="/posts/:id" component={Posts}/>
              <Route path="/add" component={AddPost}/>
            </div>
        </Content>
          <Footer style={{ textAlign: 'center' }}>
            <a href="https://github.com/n1arash/ReBlog" target="_blank">ReBlog Project</a>
          </Footer>
        </Layout>
        </div>
      </Router>
    </div>);
  }
}

export default App;
