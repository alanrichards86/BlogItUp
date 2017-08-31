import React, { Component } from 'react';
import './BaseLayout.css';
import {NavLink} from 'react-router-dom';

//Import Components
import Footer from './footer/Footer';

class BaseLayout extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className='navDiv navbar navbar-light bg-faded'>
          <nav className='navbar navbar-toggleable-md navbar-light bg-faded '>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink activeStyle={{color: 'purple'}} className="nav-link active" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{color: 'purple'}} className="nav-link active" to='/about'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{color: 'purple'}} className="nav-link active" to='/posts'>Users_Posts</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mainSectionDiv'>

          {this.props.children}

        </div>
        <div className='footerDiv'>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default BaseLayout;
