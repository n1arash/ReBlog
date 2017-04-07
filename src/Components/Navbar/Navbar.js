import React from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header } = Layout;




const Navbar = () => (
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/add">Create Post</Link></Menu.Item>
              </Menu>
            </Header>
         
	)

	export default Navbar