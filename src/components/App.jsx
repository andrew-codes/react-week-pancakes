'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {state} from './../ApplicationState';
import {getPageMeta} from './../Application/store';
import PureRenderMixin from 'react/addons';
PureRenderMixin = PureRenderMixin.addons.PureRenderMixin;

export default React.createClass({
    mixins: [PureRenderMixin],
    componentWillMount() {
        document.title = getPageMeta().get('title');
        state.on('change', () => {
            document.title = getPageMeta().get('title');
            this.forceUpdate();
        });
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
