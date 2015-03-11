'use strict';

import React from 'react';

export default React.createClass({
    render() {
        let linkStyles = this.props.isProduction &&
            <link
                href="/assets/bundle/app.css"
                rel="stylesheet"
            />;
        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title ref="title">{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                    <meta name="HandheldFriendly" content="True" />
                {linkStyles}
                </head>
                <body dangerouslySetInnerHTML={{__html: this.props.bodyHtml}} ref="bodyEl" />
            </html>
        );
    }
});
