'use strict';

import React from 'react';
import {setGithubInfo} from './../GithubInfo/actions';
import Router from 'react-router';

export default React.createClass({
    mixins:[Router.Navigation],
    loadGithubInfo() {
        let user =this.refs.user.getDOMNode().value;
        let repo = this.refs.repo.getDOMNode().value;
        this.transitionTo(`/board/${user}/${repo}`);
    },
    render() {
        return (
            <section>
                <input type="text" ref="user" placeholder="Github username"/>
                /
                <input type="text" ref="repo" placeholder="Github repository name" />
                <button onClick={this.loadGithubInfo}>Go</button>
            </section>
        );
    }
});