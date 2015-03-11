'use strict';

import React from 'react';
import AccountDropDown from './AccountDropDown';
import {getGithubInfo} from './../GithubInfo/store';

export default React.createClass({
    render() {
        const userInfo = getGithubInfo();
        let accountDropDown = '';
        if (userInfo) {
            accountDropDown = <AccountDropDown user={userInfo}/>
        }
        let styles = {
            container: {
                padding: 18
            },
            h1: {
                margin: 0,
                display: 'inline-block',
                fontSize: '2rem'
            }
        };
        return (
            <header style={styles.container}>
                <h1 style={styles.h1}>GitHub Issue Board</h1>
            {accountDropDown}
            </header>
        );
    }
})