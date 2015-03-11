'use strict';

import React from 'react';
import {Paper} from 'material-ui';
import {DragDropMixin} from 'react-dnd';
import ItemTypes from './../lib/ItemTypes';

export default React.createClass({
    mixins: [DragDropMixin],
    statics: {
        configureDragDrop(register) {
            register(ItemTypes.Card, {
                dragSource: {
                    beginDrag(component) {
                        return {
                            item: component.props.issue
                        };
                    }
                }
            });
        }
    },
    render() {
        let styles = {
            container: {
                background: '#fff',
                border: '1px solid slategray'
            },
            header: {
                background: 'slategray',
                padding: '4px',
                color: '#fff'
            },
            infoSection: {
                padding: '8px'
            }
        };
        return (
            <Paper zDepth={1} {...this.dragSourceFor(ItemTypes.Card)} >
                <article style={styles.container}>
                    <header style={styles.header}>{this.props.issue.number}</header>
                    <section style={styles.infoSection}>{this.props.issue.title}</section>
                </article>
            </Paper>
        );
    }
});