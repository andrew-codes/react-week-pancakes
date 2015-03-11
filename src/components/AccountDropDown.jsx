'use strict';

import React from 'react';

export default React.createClass({
    render() {
        let styles = {
            avatar: {
                height: '100px',
                width: '100px',
                borderRadius: "50%",
                border: '1px solid blue'
            }
        };
        return (
            <div>
                <img src={this.props.user.avatarUrl} alt="Github avatar" style={styles.avatar}/>
                <span>{this.props.user.name}</span>
            </div>
        );
    }
})