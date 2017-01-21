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
    pending: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM,
        values: ['new-book', 'price-changed', 'sold-out' , 'other'],
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}