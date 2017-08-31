import React, {Component} from 'react';

// Import Components
import LeftSide from './leftside/LeftSide';

// Import CSS
import './Splash.css';

export default class Splash extends Component{

  render(){
    return(
      <div className='mainSplashDiv'>

        <div className='leftSideDiv'>
          <LeftSide />
        </div>
        <div className='splashSectionDiv'>
          <h1>This is the Splash Page</h1>
        </div>

      </div>
    )
  }

}
