'use strict';

import {issues} from './../ApplicationState';
import dispatcher from './../Dispatcher';
import {fetchGithubIssues, moveIssue} from './actions';
import _ from 'underscore';

export const dispatchToken = dispatcher.register((payload)=> {
    let {action, data} = payload;
    switch (action) {
        case fetchGithubIssues:
            issues(()=> {
                return data;
            });
            break;
        case moveIssue:
            let {issue, newStatusState} = data;
            issues(issues => {
                let foundIssue = _.find(issues, (i)=> {
                    return i.id === issue.id;
                });
                foundIssue.statusState = newStatusState.name;
                return issues;
            });
            break;
    }
});

export function getIssues() {
    return issues();
}