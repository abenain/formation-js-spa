/**
 * Created by antoine on 05/02/2017.
 */
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

/**
 * Extend our base config with your options.
 * No options are required, call with no arguments for a base config.
 * Keep extending the config through the base
 * so that we can see what's being modified
 */
module.exports = function (options) {

	const defaultOptions = {
		backendConfigFilePath: path.join(__dirname, '..', 'config', 'environment', 'production.json'),
		prependPlugins: []
	}

	const unrecognizedOptions = Object.keys(options).filter(function (k) {
		return !(k in defaultOptions)
	})
	if (unrecognizedOptions.length) {
		throw new Error('Unrecognized options ' + unrecognizedOptions)
	}

	options = Object.assign({}, defaultOptions, options)

	return {
		target   : 'node',
		node     : {
			__dirname: true
		},
		externals: [nodeExternals()],
		entry    : {
			backend: [path.join(__dirname, '..', 'src', 'app.ts')]
		},
		output   : {
			path      : path.join(__dirname, '..', 'build'),
			publicPath: '/',
			filename  : '[name].bundle.js'
		},
		resolve  : {
			// Look for modules in .ts(x) files first, then .js(x)
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
			modules   : [
				path.join(__dirname, '..', 'src'),
				path.join(__dirname, '..', 'config')
			]
		},
		module   : {
			rules: [{
				test: /\.tsx?$/,
				use : [
					'ts-loader'
				]
			}, {
				test: /\.(png|svg|gif|jpg|jpeg)$/,
				use : [
					'url-loader',
					{
						loader : 'image-webpack-loader',
						options: {
							bypassOnDebug: true
						}
					}
				]
			}]
		},
		plugins  : options.prependPlugins.concat([
			new CopyWebpackPlugin([
				{
					from: path.join(__dirname, '..', 'package.json'),
					to  : 'package.json'
				}, {
					from: path.join(__dirname, '..', 'package-lock.json'),
					to  : 'package-lock.json'
				}, {
					from: options.backendConfigFilePath,
					to  : 'config.json'
				}
			])
		])
	}
}
