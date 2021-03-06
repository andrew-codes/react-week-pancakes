'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {state} from './../ApplicationState';
import {getPageMeta} from './../stores/ApplicationStore';
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
                margin: '0 auto'
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
