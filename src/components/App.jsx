'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import ApplicationStore from './../Application/store';

export default React.createClass({
  getInitialState(){
    return {
      title: 'Pancakes : GitHub Issue Board'
    };
  },
  componentDidMount(){
    document.title  = this.state.title;
  },
  render() {
    return (
      <main>
        <h1>Github issues</h1>
          <RouteHandler />
      </main>
    );
  }
});
