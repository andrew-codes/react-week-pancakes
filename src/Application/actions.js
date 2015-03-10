'use strict';

import dispatcher from './../Dispatcher';

export function navigate(url) {
  dispatcher.dispatch(navigate, {
    url
  });
}
