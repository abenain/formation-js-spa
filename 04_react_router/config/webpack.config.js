var webpack = require('webpack')

/**
 * Created by antoine on 22/12/2016.
 */
module.exports = {
	entry: {
		app: './src/root/index.tsx',
		vendors: [
			"webpack-material-design-icons"
		]
	},
	output: {
		path: './build',
		publicPath: '/build/',
		filename: '[name].bundle.js'
	},
	resolve: {
		// Look for modules in .ts(x) files first, then .js(x)
		extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
		// Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
		modulesDirectories: ['src', 'node_modules']
	},
	module: {
		loaders: [
			// .ts(x) files should first pass through the Typescript loader, and then through babel
			{ test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
			{ test: /\.css$/, loaders: ['style', 'css-loader'] },
			{ test: /\.scss$/, loaders: ['style', 'css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]', 'postcss-loader', 'sass'] },
			{ test: /\.(png|svg|gif|jpg|jpeg)$/, loaders: [ 'url-loader', 'image-webpack?bypassOnDebug'] },
			{ test: /\.(eot|woff|ttf|woff2)$/, loader: "file?name=[name].[ext]" }
		]
	},
	plugins: [new webpack.ProvidePlugin({React: 'react'})]
};