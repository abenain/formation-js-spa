/**
 * Created by antoine on 19/01/2017.
 */
import * as Sequelize from 'sequelize'

import { Book as BookConfig, createRelations as createBookRelations } from './Book'
import { Author as AuthorConfig } from './Author'

// Create connection to database
const sequelize = new Sequelize('mysql://root:root@localhost:3306/chapter12', {
    timestamps: true,
    paranoid: true
} as Sequelize.Options)

const defaultModelOptions = {
    freezeTableName: true // Model tableName will be the same as the model name
}

sequelize.define('Book', BookConfig, defaultModelOptions)
sequelize.define('Author', AuthorConfig, defaultModelOptions)

createBookRelations(sequelize)

export default sequelize