/**
 * Created by antoine on 22/12/2016.
 */
import * as Express from 'express'

import Middleware from './middleware'
import Router from './router'

const application: Express.Application = Express()

Middleware.init(application)
Router.createRoutes(application)

application.listen(3000, function () {
	console.log('HTTP backend listening on port 3000!')
})