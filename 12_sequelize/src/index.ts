/**
 * Created by antoine on 19/01/2017.
 */
import * as Express from 'express'

import Router from './router'

const application: Express.Application = Express()

Router.createRoutes(application)

application.listen(3000, function () {
    console.log('HTTP backend listening on port 3000!')
})



