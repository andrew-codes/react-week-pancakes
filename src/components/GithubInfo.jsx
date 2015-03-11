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
        return (
            <section className="github-info">
                <TextField hintText="github username" ref="username" onChange={this.validateUsername} />
                <TextField hintText="repo name" ref="repo" onChange={this.validateRepo}/>
                <RaisedButton onClick={this.loadGithubInfo} label="Go" primary={true}/>
            </section>
        );
    }
});