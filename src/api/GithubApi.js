'use strict';

import axios from 'axios';
import GithubCredentials from './../lib/GithubCredentials';

export function getIssues(username, repo) {
    return axios.get(`http://api.github.com/repos/${username}/${repo}/issues${GithubCredentials}`);
}

export function getUser(username){
    return axios.get(`http://api.github.com/users/${username}${GithubCredentials}`);
}