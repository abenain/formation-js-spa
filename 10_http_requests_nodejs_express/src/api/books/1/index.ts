/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'

import BookController from './BookController'

export const createRouter = () => {
    const router = Express.Router()

    // GET / returns all books
    router.get('/', BookController.index)

    return router
}