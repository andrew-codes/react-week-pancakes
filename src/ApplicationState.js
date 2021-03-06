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
    githubInfo:null
};
export const state = new State(applicationState);
export const pageMeta = state.cursor(['pageMeta']);
export const githubInfo = state.cursor(['githubInfo']);
export const issues = state.cursor(['issues']);