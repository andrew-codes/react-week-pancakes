'use strict';

import React from 'react';
import IssueCard from './IssueCard';
import ItemTypes from './../lib/ItemTypes';
import {DragDropMixin} from 'react-dnd';
import {moveIssue} from './../Issues/actions';

export default React.createClass({
    mixins: [DragDropMixin],
    statics: {
        configureDragDrop(register) {
            register(ItemTypes.Card, {
                dropTarget: {
                    acceptDrop(component, issue) {
                        moveIssue(issue, component.props.status);
                    }
                }
            });
        }
    },
    render() {
        let styles = {
            header: {
                padding: '14px 24px',
                fontSize: '2rem',
                fontWeight: 'bold',
                background: '#5F6C7A'
            },
            heading: {
                color: '#fff'
            },
            list: {
                listStyle: 'none',
                padding: '0 14px',
                height: '100vh'
            },
            card: {
                padding: '12px'
            }
        };
        return (
            <section>
                <header style={styles.header}>
                    <h4 style={styles.heading}>
                    {this.props.status.name}
                    </h4>
                </header>
                <ol style={styles.list} {...this.dropTargetFor(ItemTypes.Card)}>
                {this.props.issues.map((issue, index)=> {
                    return (<li key={index} style={styles.card}>
                        <IssueCard issue={issue} />
                    </li>);
                })}
                </ol>
            </section>
        );
    }
})
    ;