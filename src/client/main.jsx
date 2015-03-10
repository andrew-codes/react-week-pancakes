'use strict';

import React from 'react';
import Router from 'react-router';
import Routes from './../Routes';
import {setRouter} from './RouterContainer';

window.app = () => {
    setRouter(Router.create(Routes));
    Router.run(Routes, Router.HistoryLocation, (Handler) => {
        React.render(<Handler />, document.body);
    });
};