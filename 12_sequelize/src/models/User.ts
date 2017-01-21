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
    }
    // TODO: add Adress
    // TODO: add dob
    // TODO: add mail
}