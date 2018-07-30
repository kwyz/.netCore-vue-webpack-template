const path = require('path');
const webpack = require('webpack');
const outputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        stats: { modules: false },
        context: __dirname,
        entry: { 'main': './ClientApp/main.js' },
        module: {
            rules: [
                { test: /\.vue$/, include: /ClientApp/, loader: 'vue-loader'},
            ]
        },
        watch: true,
        watchOptions: {
            aggregateTimeout: 100
        },


        output: {
            path: path.join(__dirname, outputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ]
    }];
};
