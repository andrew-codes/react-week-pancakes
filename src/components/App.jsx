'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {state} from './../ApplicationState';
import {getPageMeta} from './../Application/store';
import PureRenderMixin from 'react/addons';
PureRenderMixin = PureRenderMixin.addons.PureRenderMixin;
import Header from './Header';

export default React.createClass({
    mixins: [PureRenderMixin],
    componentWillMount() {
        state.on('change', () => {
            this.forceUpdate();
        });
    },
    render() {
        return (
            <div>
                <Header />
                <main>
                    <RouteHandler />
                </main>
            </div>
        );
    }
});
