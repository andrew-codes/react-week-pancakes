'use strict';

import React from 'react';
import {navigate} from './../Application/actions';

export default React.createClass({
  navigateTo(){
    navigate('new/url');
  },
  render() {
    return (
      <main>
        <h1>Home</h1>
        <button onClick={this.navigateTo}>Navigate Yo!</button>
      </main>
    );
  }
});
