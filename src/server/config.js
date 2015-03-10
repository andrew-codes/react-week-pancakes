'use strict';

let ignoredExtensions = ['css', 'styl'];
export function ignoredExtensions() {
    return ignoredExtensions;
}
export default Object.freeze({
    isProduction: process.env.NODE_ENV == 'production',
    piping: {
        ignore: new RegExp(`(\\/\\.|~$|\\.(${ignoredExtensions.join('|')}))`),
        hook: true
    },
    port: process.env.PORT || 8000,
    version: require('../../package').version,
    webpackStylesExtensions: ['css', 'less', 'sass', 'scss', 'styl']
});