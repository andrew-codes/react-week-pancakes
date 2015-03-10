'use strict';

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default (
  <Route handler={App} name="app" path="/">
    <DefaultRoute name="home" handler={Home} />
    <NotFoundRoute name="not-found" handler={NotFound}/>
  </Route>
);
