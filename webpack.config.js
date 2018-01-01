const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        'circle-progress-bar': './circle-progress-bar.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].min.js'
    }
};