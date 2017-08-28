import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './components/baselayout/BaseLayout';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout/>
  </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
