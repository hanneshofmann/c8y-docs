const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.join(__dirname, 'app'),
    devServer: {
        outputPath: path.join(__dirname, 'build')
    },
    plugins: [
        new CopyWebpackPlugin([
                {
                    from: '../../public', to: 'guides'
                },
                {
                    from: '../styles', to: 'assets/styles'
                },
            ])
    ]
};