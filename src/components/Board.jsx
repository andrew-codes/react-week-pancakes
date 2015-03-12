'use strict';

import React from 'react';
import {getStatusStates} from './../stores/StatusStateStore';
import {getIssues} from './../stores/IssueStore';
import Router from 'react-router';
import StatusColumn from './StatusColumn';
import {Paper} from 'material-ui';

export default React.createClass({
    mixins: [Router.State],
    render() {
        const statusStates = getStatusStates();
        const issues = getIssues();
        let columnCount = statusStates.length;
        let columnWidth = 100 / columnCount;
        let styles = {
            list: {
                listStyle: 'none'
            },
            statusColumn: {
                width: `${columnWidth}%`,
                display: 'inline-block',
                float: 'left'
            }
        };
        return (
            <Paper zDepth={1} className="board">
                <ol style={styles.list}>
            {statusStates.map((status, index) => {
                let issuesInStatus = issues.filter(issue=> {
                    return issue.state === 'open' && issue.statusState === status.name;
                });
                return (
                    <li key={index} style={styles.statusColumn} className="status-column">
                        <StatusColumn status={status} issues={issuesInStatus}/>
                    </li>
                );
            })}
                </ol>
            </Paper>
        );
    }
});