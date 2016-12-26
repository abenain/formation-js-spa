/**
 * Created by antoine on 22/12/2016.
 */
module.exports = {
	entry: './src/index.ts',
	output: {
		path: './build',
		publicPath: '/build/',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'babel-loader!ts-loader' }
		]
	}
};