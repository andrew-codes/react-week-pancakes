'use strict';

import dispatcher from './../Dispatcher';
import Firebase from 'firebase';
let fb = new Firebase('https://pancakes.firebaseio.com/issues');

export function moveIssue(issue, newStatusState) {
    dispatcher.dispatch(moveIssue, {issue, newStatusState});
    fb.child(issue.id).update({statusState: newStatusState.name}, (error)=> {
        if (error) {
            dispatcher.dispatch(errorMovingIssue, {issue, newStatusState, error});
        }
    });
}

export function errorMovingIssue() {
}