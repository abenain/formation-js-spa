/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'

import { createRouter as createBooksRouter } from './api/books'
import { createRouter as createReportRouter } from './api/reports'
import { createRouter as createUserRouter } from './api/users'

const Router = {
    createRoutes: (app: Express.Application) => {
        app.use(createBooksRouter())
        app.use(createReportRouter())
        app.use(createUserRouter())
    }
}

export default Router