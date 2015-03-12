'use strict';

import {pageMeta} from './../ApplicationState';
import dispatcher from './../Dispatcher';
import {navigate} from './../actions/ApplicationActions';
import routes from './Routes';

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
