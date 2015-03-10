'use strict';

import {pageMeta} from './../ApplicationState';
import dispatcher from './../Dispatcher';
import {navigate} from './actions';
import routes from './routes';

export const dispatchToken = dispatcher.register((payload) => {
    let {action, data} = payload;

    switch (action) {
        case navigate:
            let {url} = data;
            pageMeta(() => {
                return {
                    title: routes[url].title,
                    currentUrl: url
                };
            });
            break;
    }
});

export function getPageMeta() {
    return pageMeta();
}
