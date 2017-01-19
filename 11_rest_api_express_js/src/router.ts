/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'

import { createRouter as createBooksRouter } from './api/books'
import { createRouter as createWeatherRouter } from './api/weather'

const Router = {
    createRoutes: (app: Express.Application) => {
        app.use(createBooksRouter())
        app.use(createWeatherRouter())
    }
}

export default Router