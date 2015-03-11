'use strict';

import React from 'react';

export default React.createClass({
    render() {
        return (
            <span>Issue : {this.props.issue.title}</span>
        );
    }
});