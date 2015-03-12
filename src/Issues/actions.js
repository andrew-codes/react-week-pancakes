'use strict';

import dispatcher from './../Dispatcher';
import axios from 'axios';
import Promise from 'bluebird';
import Firebase from 'firebase';
let firebase = new Firebase('https://pancakes.firebaseio.com/issues');

export function fetchGithubIssues(username, repo) {
    axios.get(`http://api.github.com/repos/${username}/${repo}/issues`)
        .then(function (result) {
            let dataUpdates = result.data.map((issue)=> {
                return new Promise((resolve, reject) => {
                    firebase.child(issue.id).once('value', (snapshot)=> {
                        if (!snapshot.exists()) {
                            issue.statusState = 'Backlog';
                            firebase.push({id: issue.id, statusState: 'Backlog'});
                        } else {
                            issue.statusState = snapshot.val().statusState;
                        }
                        resolve(issue);
                    });
                });
            });
            return Promise.all(dataUpdates);
        })
        .then((issues)=> {
            dispatcher.dispatch(fetchGithubIssues, issues);
        });
}

export function moveIssue(issue, newStatusState) {
    firebase.child(issue.id).update({statusState: newStatusState.name}, (error)=> {
        if (error) {
            throw error;
        }
        dispatcher.dispatch(moveIssue, {issue, newStatusState});
    });
}