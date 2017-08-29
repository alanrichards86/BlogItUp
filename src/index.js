import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './components/baselayout/BaseLayout';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Import Comonents
import Splash from './components/splash/Splash';
import About from './components/about/About';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/about' component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
