/**
 * Created by antoine on 19/01/2017.
 */
import * as Sequelize from 'sequelize'

export const Author = {
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
    }
}
