'use strict';

import {pageMeta} from './../ApplicationState';
import dispatcher from './../Dispatcher';
import {navigate} from './actions';
import routes from './routes';
import {getRoute} from './../lib/RouteUtils.js';

export const dispatchToken = dispatcher.register((payload) => {
    let {action, data} = payload;

    switch (action) {
        case navigate:
            let {url} = data;
            pageMeta(() => {
                return {
                    currentUrl: url
                };
            });
            break;
    }
});

export function getPageMeta() {
    return pageMeta();
}
