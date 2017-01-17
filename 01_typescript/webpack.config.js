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
	resolve: {
		// Look for modules in .ts(x) files first, then .js(x)
		extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
		// Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
		modulesDirectories: ['src', 'node_modules']
	},
	module: {
		loaders: [
			{ test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'babel-loader!ts-loader' }
		]
	}
};