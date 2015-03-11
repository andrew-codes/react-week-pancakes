'use strict';

export function isRequired(value, cb){
    if (value){
        cb('');
    }
    else
    {
        cb('required field');
    }
}