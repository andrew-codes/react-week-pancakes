'use strict';

import {githubInfo} from './../ApplicationState';
import dispatcher from './../Dispatcher';
import {setGithubInfo} from './../GithubInfo/actions';

export const dispatchToken = dispatcher.register((payload) => {
    let {action, data} = payload;

    switch (action) {
        case setGithubInfo:
            githubInfo(()=> {
                return data;
            });
            break;
    }
});

export function getGithubInfo() {
    return githubInfo();
}
