import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import config from '../webpack.config';
const compiler = webpack(config);
const app = express();
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	inline: true,
	lazy: false,
	historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));
app.use('*', (req, res) => {
	const filename = path.join(__dirname, '../src', 'index.html');
	res.sendFile(path.join(filename));
});
app.listen(3000, (err) => {
	if (err) {
		console.log(err);
	}
	console.log('run on 3000');
})