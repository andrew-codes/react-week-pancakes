'use strict';

import React from 'react';
import IssueCard from './IssueCard';

export default React.createClass({
    render() {
        return (
            <section>
                <header>{this.props.status.name}</header>
                <ol>
                {this.props.issues.map((issue, index)=>{
                    return (<li key={index}><IssueCard issue={issue} /></li>);
                })}
                </ol>
            </section>
        );
    }
});