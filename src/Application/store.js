'use strict';

import {title} from './../ApplicationState';
import dispatcher from './../Dispatcher';
import {navigate} from './actions';

export const dispatchToken = dispatcher.register((payload) =>{
  let {action, data} = payload;

  switch(action){
    case navigate:
      let {url} = data;
      console.log(url);
      break;
  }
});
