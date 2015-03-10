'use strict';

import EventEmitter from 'eventemitter3';
import Immutable from 'immutable';

export default class State extends EventEmitter {
    constructor(optionalJson) {
        this._state = null;
        this.load(optionalJson || {});
    }

    load(json) {
        this.set(Immutable.fromJS(json));
    }

    set(state) {
        this._state = state;
        this.emit('change', this._state);
    }

    get() {
        return this._state;
    }

    save() {
        return this._state.toJS();
    }

    toString() {
        return JSON.stringify(this.save());
    }

    cursor(path) {
        return function(update) {
            if (update) {
                this.set(this._state.updateIn(path, update));
            } else {
                return this._state.getIn(path);
            }
        }.bind(this);
    }
}
