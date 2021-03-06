import React, { Component } from 'react';
import './styles/BaseLayout.css';
import {NavLink} from 'react-router-dom';

//Import Components
import LeftSide from './leftside/LeftSide';
import Footer from './footer/Footer';

class BaseLayout extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className='navDiv navbar navbar-light bg-faded'>
          <nav className='navbar navbar-toggleable-md navbar-light bg-faded '>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink activeStyle={{color: 'purple'}} className="nav-link active" exact to='/'>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mainSectionDiv'>
          <div className='sideDiv'>
            <LeftSide/>
          </div>

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
