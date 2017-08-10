import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// https://stackoverflow.com/questions/30835213/react-from-npm-cannot-be-used-on-the-client-because-development-is-not-defined
const NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');
export default {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src', 'index.jsx')
    ],
    output: {
        path: path.join(__dirname, 'dest'),
        filename: 'bundle.js',
        chunkFilename: '[name][chunkhash].js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: NODE_ENV
            }
        }) //,
        // new HtmlWebpackPlugin({
        //    template: path.join(__dirname, 'src', 'index.html'),
        //    inject: true
        // })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            loaders: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        extensions: [".js", '.jsx']
    }
}