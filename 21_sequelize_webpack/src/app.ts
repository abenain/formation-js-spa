// Set default node environment to development
process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'development'

import * as Express from 'express'
import config from '../config/environment'

import Middleware from './middleware'
import Router from './router'

const application: Express.Application = Express()

Middleware.init(application)
Router.createRoutes(application)

application.listen(config['port'], function () {
    console.log('HTTP backend listening on port %s!', config['port'])
})