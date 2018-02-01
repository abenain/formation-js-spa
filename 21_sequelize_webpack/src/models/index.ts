/**
 * Created by antoine on 19/01/2017.
 */
import * as Sequelize from 'sequelize'

import { config as bookConfig, createRelations as createBookRelations } from './Book'
import { config as tagConfig, createRelations as createTagRelations } from './Tag'
import { config as authorConfig } from './Author'
import { config as userConfig, createRelations as createUserRelations} from './User'
import { config as reportConfig, createRelations as createReportRelations } from './Report'

// Create connection to database
const sequelize = new Sequelize('mysql://root:root@localhost:3306/chapter12', {
    timestamps: true,
    paranoid: true
} as Sequelize.Options)

const defaultModelOptions = {
    freezeTableName: true // Model tableName will be the same as the model name
}

sequelize.define('Book', bookConfig, defaultModelOptions)
sequelize.define('Tag', tagConfig, defaultModelOptions)
sequelize.define('Author', authorConfig, defaultModelOptions)
sequelize.define('User', userConfig, defaultModelOptions)
sequelize.define('Report', reportConfig, defaultModelOptions)

createBookRelations(sequelize)
createTagRelations(sequelize)
createReportRelations(sequelize)
createUserRelations(sequelize)

export default sequelize