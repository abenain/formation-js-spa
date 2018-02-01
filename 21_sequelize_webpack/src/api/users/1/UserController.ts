/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'

import sequelize from '../../../models'

const UserController = {
    // Return all reports for user
    getReportsForUser: (request:Express.Request, response:Express.Response) => {
        sequelize.models['User'].findById(request.params.userId).then((user: any) => {
            if(!user){
                throw new Error("user not found")
            }
            return user.getCreatedReports({raw: true})
        }).then(reports => {
            response.json(reports)
        }).catch(error => {
            console.error(error)
            response.status(500).end()
        }).done()
    },
    // Return all reports for user
    getPendingReviewsForUser: (request:Express.Request, response:Express.Response) => {
        sequelize.models['User'].findById(request.params.userId).then((user: any) => {
            if(!user){
                throw new Error("user not found")
            }
            return user.getPendingReviews({raw: true})
        }).then(reports => {
            response.json(reports)
        }).catch(error => {
            console.error(error)
            response.status(500).end()
        }).done()
    }
}

export default UserController