'use strict';

import React from 'react';
import {getStatusStates} from './../StatusStates/store';
import {getIssues} from './../Issues/store';
import Router from 'react-router';
import StatusColumn from './StatusColumn';

export default React.createClass({
    mixins: [Router.State],
    render() {
        const statusStates = getStatusStates();
        const issues = getIssues();
        return (
            <ol>
            {statusStates.map((status, index) => {
                let issuesInStatus = issues.filter(issue=> {
                    return status.name === 'Backlog' || issue.state === 'open' && issue.labels.indexOf(status) > -1;
                });
                return (
                    <li key={index}>
                    <StatusColumn status={status} issues={issuesInStatus}/>
                </li>
                );
            })}
            </ol>
        );
    }
});