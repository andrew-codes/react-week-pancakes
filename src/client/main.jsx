'use strict';

import React from 'react';
import Router from 'react-router';
import Routes from './../Routes';
import {setRouter} from './RouterContainer';
import {navigate} from './../Application/actions';

require('./styles/index.styl');

window.app = () => {
    setRouter(Router.create(Routes));
    Router.run(Routes, Router.HistoryLocation, (Handler, state) => {
        navigate(state.path);
        React.render(<Handler />, document.body);
    });
};