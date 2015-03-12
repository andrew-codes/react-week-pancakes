'use strict';
import Home from './../components/Home';
import NotFound from './../components/NotFound';
import Board from './../components/Board';

export default Object.freeze({
    home: {
        name: 'home',
        path: '/',
        handler: Home
    },
    board:
    {
        name: 'board',
        path: 'board/:githubUserName/:repoName',
        handler: Board
    },
    'not-found': {
        name: 'not-found',
        path: 'not-found',
        handler: NotFound
    }
});