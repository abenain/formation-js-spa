/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'
import * as Sequelize from 'sequelize'

import sequelize from '../../../models'

const ReportController = {
    // Return all reports
    index: (request:Express.Request, response:Express.Response) => {
        sequelize.models['Report'].findAll({
            include: [{
                model: sequelize.models['Book']
            },{
                model: sequelize.models['User'],
                as: "creator"
            },{
                model: sequelize.models['User'],
                as: "reviewer"
            }]
        } as Sequelize.FindOptions).then((reports: any[]) => {
            response.json(reports.map(report => report.toJSON()))
        }).catch((error: Error) => {
            console.error(error)
            response.status(500)
            response.end()
        })
        .done()
    }
}

export default ReportController