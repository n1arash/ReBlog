import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from '../src/App';
import BlogApp from '../src/Reducers/BlogApp';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let store = createStore(BlogApp)
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, div);
});
