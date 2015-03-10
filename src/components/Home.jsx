'use strict';

import React from 'react';
import {navigate} from './../Application/actions';
import {getPageMeta} from './../Application/store';
import Router from 'react-router';
let Link = Router.Link;

export default React.createClass({
    navigateTo() {
        navigate('new/url');
    },
    render() {
        return (
            <main>
                <h1>Home</h1>
                <button onClick={this.navigateTo}>Navigate Yo!</button>
                <Link to="/new/url">
                    <span>Navigate with React Router Yo!</span>
                </Link>
            </main>
        );
    }
});
