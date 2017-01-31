import * as React from 'react';
import { Component } from 'react';
import { browserHistory, hashHistory, Link, Route, Router, IndexRoute } from 'react-router';
import { Main } from './common/main';
import { Sub } from './sub/sub';
import { User } from './user/user';

export default class BaseRouter extends Component<any, undefined> {
  public render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Sub}/>
          <Route path="/r/:subname" component={Sub} />
          <Route path="/user/:username" component={User} />
        </Route>
      </Router>
    );
  }
}
