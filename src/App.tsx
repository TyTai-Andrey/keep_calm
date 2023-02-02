import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Home } from '@pages/Home';
import './App.module.scss';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={'/'} exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
