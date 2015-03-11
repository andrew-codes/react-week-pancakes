'use strict';

import routes from './../Application/routes.js';

export function getRoute(path) {
    let filteredRoutes = Object.keys(routes).filter((item)=>{
        return item.path === path;
    });
    return filteredRoutes[0] || routes[0];
}