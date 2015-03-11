'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {state} from './../ApplicationState';
import {getPageMeta} from './../Application/store';
import PureRenderMixin from 'react/addons';
PureRenderMixin = PureRenderMixin.addons.PureRenderMixin;
import Header from './Header';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default React.createClass({
    mixins: [PureRenderMixin],
    componentWillMount() {
        state.on('change', () => {
            this.forceUpdate();
        });
    },
    render() {
        let styles = {
            main: {
                margin: '0 auto',
                padding: '30px 0'
            }
        };
        return (
            <div>
                <Header/>
                <main style={styles.main}>
                    <RouteHandler />
                </main>
            </div>
        );
    }
});
