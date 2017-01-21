/**
 * Created by antoine on 21/01/2017.
 */
import * as Sequelize from 'sequelize'

export const config = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}

export const createRelations = (sequelize: Sequelize.Sequelize) => {
    sequelize.models['User'].hasMany(sequelize.models['Report'], {
        foreignKey: 'creatorId',
        as: 'createdReports'
    })
    sequelize.models['User'].hasMany(sequelize.models['Report'], {
        foreignKey: 'reviewerId',
        as: 'pendingReviews'
    })
}