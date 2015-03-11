'use strict';

import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import {isRequired} from './../lib/validation';

export default React.createClass({
    validateUserName() {
    },
    validatePassword() {
    },
    githubLogin() {
    },
    render() {
        let styles = {
            container: {
                padding: '40px',
                background: 'slategray'
            },
            heading: {
                padding: 0,
                color: '#fff',
                width: '180px',
                display: 'block'
            },
            fields: {
                color: '#fff',
                marginLeft: '20px',
                display: 'inline-block'
            },
            button: {
                float: 'right'
            }
        };
        return (
            <section className="github-login" style={styles.container}>
                <h3 style={styles.heading}>Login</h3>
                <div style={styles.fields}>
                    <div style={styles.field}>
                        <TextField hintText="github username" ref="username" onChange={this.validateUsername} />
                    </div>
                    <div style={styles.field}>
                        <TextField hintText="github password" ref="password" onChange={this.validatePassword}/>
                    </div>
                    <div style={styles.button}>
                        <RaisedButton onClick={this.githubLogin} label="Go" primary={true}/>
                    </div>
                </div>
            </section>
        );
    }
})