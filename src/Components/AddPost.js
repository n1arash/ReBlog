import React from 'react';
import {connect} from 'react-redux';
import { Input, Button, notification} from 'antd'


notification.config({
  duration: 3,
});

export const openNotification = (message,description) => {
  const key = `open${Date.now()}`;
  const btnClick = function () {
    // to hide notification box
    notification.close(key);

  };
  const btn = (
    <Button type="primary" size="small" onClick={btnClick}>
      Close
    </Button>
  );
  notification.success({
    message,
    description,
    btn,
    key,
  });
};

const AddPost = ({ dispatch }) => {
  let title;
  let content;
  return (<form onSubmit={e => {
    e.preventDefault();

    if (!title.refs.input.value.trim() && ! content.refs.input.value.trim()  ){
      if( title.refs.input.value === '' || content.refs.input.value === '')
        {
          return
        }
    }
    dispatch({
      type:'ADD_POST',
      title : title.refs.input.value,
      content: content.refs.input.value
    })
    
    title.refs.input.value = '';
    content.refs.input.value = '';
    openNotification('Congratulation !','You Successfully Added Your Post!');
  }}>
    <Input size="large" ref={node => title = node} type="text" placeholder="Post Title..." />
    <div style={{ margin: '24px 0' }} />
    <Input ref={node => content = node} rows="7" type="textarea" placeholder="Post Content..." />
    <div style={{ margin: '24px 0' }} />
    <Button type="primary" htmlType="submit" size="large">Save</Button>
  </form>)
}

export default connect()(AddPost)
