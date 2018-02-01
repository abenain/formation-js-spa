/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'

import UserController from './UserController'

export const createRouter = () => {
    const router = Express.Router()
    
    // GET /:userId/reports returns all reports created by user
    router.get('/:userId/reports', UserController.getReportsForUser)

    // GET /:userId/reports returns all pending reviews for uuser
    router.get('/:userId/reviews', UserController.getPendingReviewsForUser)

    return router
}