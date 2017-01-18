/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'

import { createRouter as createBooksRouter } from './api/books'
import { createRouter as createWeatherRouter } from './api/weather'

const setDefaultHeaders = (request: Express.Request, response: Express.Response, next: Express.NextFunction) => {
    response.header('Access-Control-Allow-Origin', '*')
    next()
}

const Router = {
    createRoutes: (app: Express.Application) => {
        app.use(setDefaultHeaders)
        app.use(createBooksRouter())
        app.use(createWeatherRouter())
    }
}

export default Router