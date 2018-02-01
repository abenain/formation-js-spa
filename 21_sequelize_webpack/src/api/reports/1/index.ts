/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'

import ReportController from './ReportController'

export const createRouter = () => {
    const router = Express.Router()

    // GET / returns all reports
    router.get('/', ReportController.index)

    // POST / create a reports
    router.post('/', ReportController.create)

    return router
}