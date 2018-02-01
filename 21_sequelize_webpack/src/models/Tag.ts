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
    label: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

export const createRelations = (sequelize: Sequelize.Sequelize) => {
    sequelize.models['Tag'].belongsToMany(sequelize.models['Book'], {through: 'BookTag', constraints: false})
}