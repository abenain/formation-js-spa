/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'

import { createRouter as createRouterV1 } from './1'

export const createRouter = () => {
    const router = Express.Router()

    // Mounting route for v1 API
    router.use('/1/users/', createRouterV1())

    return router
}