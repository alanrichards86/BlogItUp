import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//Import CSS
import './Posts.css';


export default class AllPosts extends Component {

  render(){
    return(
      <div className='mainAllPostDiv'>
        <h2>This is the All Posts Component</h2>

        <Link className='link1' to='/newPost'>Create A New Post</Link>

      </div>
    )
  }
}
