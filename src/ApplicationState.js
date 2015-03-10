'use strict';

import State from './lib/State';

let applicationState = {
  title: '',
  issues: []
};
export default function setState(state) {
  applicationState = state;
}
export const state = new State(applicationState);
export const issues = state.cursor('issues');
