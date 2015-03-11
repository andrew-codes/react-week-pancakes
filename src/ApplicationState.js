'use strict';

import State from './lib/State';
import Immutable from 'immutable';

const applicationState = process.env.IS_BROWSER ? window._appState :
{
    pageMeta: {
        title: '',
        currentUrl: '/'
    },
    issues: [],
    githubInfo: {
        user: '',
        repo: ''
    }
};
export const state = new State(applicationState);
export const issues = state.cursor(['issues']);
export const pageMeta = state.cursor(['pageMeta']);
export const githubInfo = state.cursor(['githubInfo']);