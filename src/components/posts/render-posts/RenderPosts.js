import React, {Component} from 'react';



export default class RenderPosts extends Component{
  render(){
    console.log(this.props);
    return(
      <div className='mainRenderPostsDiv'>
        <p>This is the RenderPosts component</p>
        <ul>
          <li>{this.props.blogs.nameValue}</li>
        </ul>
      </div>
    )
  }
}