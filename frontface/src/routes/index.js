import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'


import Home from '../pages/home/home.js';
import About from '../pages/about/about.js';


require('../less/styles.less');

const Main = () => (
  <main>
    <Switch>
      <Route  exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/roster' component={About}/>
      <Route path='/schedule' component={About}/>
      <Route   path='/' component={Home}/>
    </Switch>
  </main>
)

const App = () => (
    <HashRouter>
        <Main />
    </HashRouter>
)


ReactDOM.render(<App />, document.getElementById('app'))
