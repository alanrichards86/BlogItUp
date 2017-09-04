import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//Import CSS
import './Posts.css';

//Import Components
import RenderPosts from './render-posts/RenderPosts';


export default class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state={
      blogData:[]
    }
  }
  grabData = (e) => {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({blogData: data});
      });
  }
  renderPosts = () => {
    return this.state.blogData.map(blogs => {
      console.log(blogs);
      return <RenderPosts key={blogs.nameValue} blogs={blogs} />
    });
  }
  render() {
    console.log(this.state.blogData);
    return(
      <div className='mainAllPostDiv'>
        <h2>This is the All Posts Component</h2>

        <Link className='link1' to='/newPost'>Create A New Post</Link>

        <div className='showPostsDiv'>
          {this.renderPosts()}
        </div>

        <button type='button' onClick={this.grabData}>GrabIt!</button>

      </div>
    )
  }
  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
      return results.json();
    }).then(data => {
      this.setState({blogData: data})
      console.log(this.state.blogData);
    })
  }
}
