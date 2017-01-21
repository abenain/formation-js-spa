/**
 * Created by antoine on 19/01/2017.
 */
import * as Sequelize from 'sequelize'

export const config = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publish_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

export const createRelations = (sequelize: Sequelize.Sequelize) => {
    sequelize.models['Book'].belongsTo(sequelize.models['Author'], {foreignKey: 'authorId'})
    sequelize.models['Book'].belongsToMany(sequelize.models['Tag'], {through: 'BookTag'})
}
