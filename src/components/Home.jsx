'use strict';

import React from 'react';
import {getPageMeta} from './../stores/ApplicationStore';
import Router from 'react-router';
import GithubInfo from './GithubInfo';
import Login from './Login';
import {Paper} from 'material-ui';

export default React.createClass({
    render() {
        return (
            <div>
                <GithubInfo />
                <span className="divider" data-text="or"></span>
                <Login />
            </div>
        );
    }
});
