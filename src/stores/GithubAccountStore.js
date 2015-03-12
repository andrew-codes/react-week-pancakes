'use strict';

import {githubInfo} from './../ApplicationState';
import dispatcher from './../Dispatcher';
import {receivedGithubUser} from './../actions/GithubInfoActions';

export const dispatchToken = dispatcher.register((payload) => {
    let {action, data} = payload;

    switch (action) {
        case receivedGithubUser:
            githubInfo(()=> {
                return data;
            });
            break;
    }
});

export function getGithubInfo() {
    return githubInfo();
}
