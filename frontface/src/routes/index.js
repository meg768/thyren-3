import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'
import {random} from 'yow';

import Apple from '../pages/apple/apple.js';
import Banana from '../pages/banana/banana.js';

require('../less/styles.less');

const Main = () => (
  <main>
    <Switch>
      <Route path='/apple'   component={Apple}/>
      <Route path='/banana'  component={Banana}/>
      <Route path='/'        component={Apple} exact/>
      <Route path='/'        component={Apple}/>
    </Switch>
  </main>
)

const App = () => (
    <HashRouter>
        <Main />
    </HashRouter>
)


ReactDOM.render(<App />, document.getElementById('app'))
