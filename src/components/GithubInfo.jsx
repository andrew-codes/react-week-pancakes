'use strict';

import React from 'react';
import {setGithubInfo} from './../GithubInfo/actions';
import Router from 'react-router';
import {TextField, RaisedButton} from 'material-ui';
import {isRequired} from './../lib/validation';

export default React.createClass({
    mixins: [Router.Navigation],
    loadGithubInfo() {
        let user = this.refs.username.getValue();
        let repo = this.refs.repo.getValue();
        if (user && repo) {
            this.transitionTo(`/board/${user}/${repo}`);
        }
    },
    validateUsername() {
        isRequired(this.refs.username.getValue(), (msg)=> {
            this.refs.username.setErrorText(msg);
        });
    },
    validateRepo() {
        isRequired(this.refs.username.getValue(), (msg)=> {
            this.refs.username.setErrorText(msg);
        });
    },
    render() {
        let styles = {
            container: {
                background: '#fff',
                padding: '40px'
            },
            heading: {
                padding: 0,
                width: '180px',
                display: 'block',
                color: 'slategray'
            },
            fields: {
                marginLeft: '20px',
                display: 'inline-block'
            },
            button:{
                float: 'right'
            }
        };
        return (
            <section style={styles.container} className="github-info">
                <h3 style={styles.heading}>View a Repo</h3>
                <div style={styles.fields}>
                    <div style={styles.field}>
                        <TextField hintText="github username" ref="username" onChange={this.validateUsername} />
                    </div>
                    <div style={styles.field}>
                        <TextField hintText="repo name" ref="repo" onChange={this.validateRepo}/>
                    </div>
                    <div style={styles.button}>
                        <RaisedButton onClick={this.loadGithubInfo} label="Go" primary={true}/>
                    </div>
                </div>
            </section>
        );
    }
});