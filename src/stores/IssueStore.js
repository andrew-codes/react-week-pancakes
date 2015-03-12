'use strict';

import dispatcher from './../Dispatcher';
import {issues} from './../ApplicationState';
import {receivedGithubIssues} from './../actions/GithubIssueActions';
import {moveIssue, errorMovingIssue} from './../actions/IssueActions';
import _ from 'underscore';
import Firebase from 'firebase';
let fb = new Firebase('https://pancakes.firebaseio.com/issues');

export const dispatchToken = dispatcher.register((payload)=> {
    let {action, data} = payload;
    switch (action) {
        case receivedGithubIssues:
            fb.once('value', (snapshot)=> {
                issues(()=> {
                    let meta = snapshot.val();
                    return data.map((issue)=> {
                        issue.statusState = meta && meta[issue.id] ? meta[issue.id].statusState : 'Backlog';
                        return issue;
                    });
                });
            });
            break;
        case moveIssue:
            let {issue, newStatusState} = data;
            issues((issues)=> {
                _.find(issues, ((item)=> {
                    return item.id === issue.id;
                })).statusState = newStatusState.name;
                return issues;
            });
            break;
        case errorMovingIssue:
            issues((issues)=> {
                issues((issues)=> {
                    _.find(issues, ((item)=> {
                        return item.id === issue.id;
                    })).statusState = issue.statusState;
                    return issues;
                });
                return issues;
            });
            break;
    }
});

export function getIssues() {
    return issues();
}