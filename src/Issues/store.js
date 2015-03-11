'use strict';

import {issues} from './../ApplicationState';
import dispatcher from './../Dispatcher';
import {loadIssues} from './actions';

export const dispatchToken = dispatcher.register((payload)=> {
    let {action, data} = payload;
    switch (action) {
        case loadIssues:
            issues((issues)=> {
                return data;
            });
            break;
    }
});

export function getIssues() {
    return issues();
}