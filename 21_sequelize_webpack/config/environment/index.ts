const path = require('path')
const fs = require('fs')

// All configurations will extend these options
// ============================================
const all: any = {
	env: process.env['NODE_ENV'] || 'developpement',

	// Server port
	port: process.env['PORT'] || 9000
}

// Export the config object based on the NODE_ENV
// ==============================================
let config = {...all}
if (process.env['NODE_ENV'] === 'production' || process.env['NODE_ENV'] === 'test') {
	const localConfigFile = path.join('.', 'config.json')
	if (fs.existsSync(localConfigFile)) {
		// in production mode, loading config from filesystem
		const rawConfig = fs.readFileSync(localConfigFile, {encoding: 'utf-8'})
		config = { ...config, ...JSON.parse(rawConfig)}
	} else {
		console.log('')
		console.error('** FATAL: no config.json file found, this file is required in ' + process.env['NODE_ENV'] + ' mode')
		console.log('')
	}
} else {
	config = { ...config, ...require('./development')}
}

export default config
