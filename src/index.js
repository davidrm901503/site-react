import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';
import './index.css';
import {  BrowserRouter as Router,  Route,  Redirect} from 'react-router-dom'
import Main from './components/Main';
import Otro from './components/Otro';
import Tercero from './components/Tercero';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router  basename="/">
    <div>

      <Redirect to="/home" />
      <Route path="/home" component={Main}  />
      <Route path="/otro" component={Otro} />
      <Route path="/tercero/vista" component={Tercero} />
    </div>
  </Router>,
  document.getElementById('root'));

registerServiceWorker();

