import React, { Component } from 'react';

import Home from './components/pages/home';
import Moo from './components/pages/moo';
import IFSM from './components/pages/ifsm';
import Nannon from './components/pages/nannon';
import SIE from './components/pages/sie';

import './main.css';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/moo' component={Moo} />
      <Route exact path='/ifsm' component={IFSM} />
      <Route exact path='/nannon' component={Nannon} />
      <Route exact path='/sie' component={SIE} />
      </div>
      </Router>
    );
  }
}

export default App;
