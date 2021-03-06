'use strict';

import React from 'react';
import Promise from 'bluebird';
import Router from 'react-router';
import Routes from './../Routes';
import DocumentTitle from 'react-document-title';
import Html from './../components/Html';

function renderRoute(Handler, config, path) {
    let data = {
        pageMeta: {
            currentUrl: path
        },
        issues: [],
        githubInfo: null
    };
    let appHtml = React.renderToString(<Handler />);
    let appScriptSrc = config.isProduction ? 'assets/bundle/bundle.js' : 'http://localhost:8888/assets/bundle/bundle.js';
    let scriptsHtml = `
        <script>window._appState = ${JSON.stringify(data)}</script>
        <script src="${appScriptSrc}"></script>
        <script>window.app()</script>
    `;
    let bodyHtml = appHtml + scriptsHtml;
    let title = DocumentTitle.rewind();
    let htmlBody = React.renderToStaticMarkup(<Html bodyHtml={
        bodyHtml
        }
        isProduction ={
            config.isProduction
            }
        title = {
            title
            } />);
    return `<!DOCTYPE html>${htmlBody}`;
}

export default {
    render(path, config) {
        return new Promise((resolve) => {
            Router.run(Routes, path, (Handler, state) => {
                let html = renderRoute(Handler, config, path);
                let isNotFound = state.routes.some(route => route.name.toLowerCase() === 'not-found');
                resolve({
                    html: html,
                    status: isNotFound ? 404 : 200
                });
            });
        });
    }
};
