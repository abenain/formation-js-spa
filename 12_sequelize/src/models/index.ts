/**
 * Created by antoine on 19/01/2017.
 */
import * as Sequelize from 'sequelize'

import { config as bookConfig, createRelations as createBookRelations } from './Book'
import { config as authorConfig } from './Author'

// Create connection to database
const sequelize = new Sequelize('mysql://root:root@localhost:3306/chapter12', {
    timestamps: true,
    paranoid: true
} as Sequelize.Options)

const defaultModelOptions = {
    freezeTableName: true // Model tableName will be the same as the model name
}

sequelize.define('Book', bookConfig, defaultModelOptions)
sequelize.define('Author', authorConfig, defaultModelOptions)

createBookRelations(sequelize)

export default sequelize