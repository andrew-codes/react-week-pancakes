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
        return (
            <header>
                <h1>GitHub Issue Board</h1>
            {accountDropDown}
            </header>
        );
    }
})