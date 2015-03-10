'use strict';
import Home from './../components/Home';
import NotFound from './../components/NotFound';

export default Object.freeze({
    '/': {
        name: 'home',
        title: 'Pancakes: Github Issues',
        handler: Home
    },
    '/new/url':
    {
        name: 'new-url',
        title: 'test',
        handler: Home
    },
    'not-found': {
        name: 'not-found',
        title: 'Pancakes: Not Found',
        handler: NotFound
    }
});