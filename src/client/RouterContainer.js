'use strict';

let _router = null;
export function setRouter(router) {
    _router = router;
}
export function getRouter(){
    return _router;
}