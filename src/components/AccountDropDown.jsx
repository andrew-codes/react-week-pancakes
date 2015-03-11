'use strict';

import React from 'react';

export default React.createClass({
    render() {
        let styles = {
            container: {
                display: 'inline-block',
                float: 'right'
            },
            avatar: {
                height: '50px',
                width: '50px',
                borderRadius: "50%",
                border: '1px solid blue'
            },
            name: {
                verticalAlign: 'text-bottom',
                display: 'inline-block',
                padding: '0 18px'
            }
        };
        return (
            <div style={styles.container}>
                <span style={styles.name}>{this.props.user.name}</span>
                <img src={this.props.user.avatarUrl} alt="Github avatar" style={styles.avatar}/>
            </div>
        );
    }
})