const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    const entry = {
        'main': path.resolve(__dirname, './main.js')
    };

    const plugins = [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.template.html')
        })
    ];

    return {
        entry,
        devtool: 'source-map',
        plugins,
        resolve: {
            alias: {
                '@runnan/obvious-core': path.join(__dirname, '../../src/index.ts')
            }
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: ['awesome-typescript-loader']
                }
            ]
        }
    };
};
