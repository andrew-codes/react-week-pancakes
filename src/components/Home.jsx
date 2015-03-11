'use strict';

import React from 'react';
import {getPageMeta} from './../Application/store';
import Router from 'react-router';
import GithubInfo from './GithubInfo';

export default React.createClass({

    render() {
        return (
            <GithubInfo />
        );
    }
});
