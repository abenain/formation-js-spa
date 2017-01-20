/**
 * Created by antoine on 19/01/2017.
 */
import * as Sequelize from 'sequelize'

import { Book as BookConfig } from './Book'

// Create connection to database
const sequelize = new Sequelize('mysql://root:root@localhost:3306/chapter12', {
    timestamps: true,
    paranoid: true
})

sequelize.define('Book', BookConfig, {
    freezeTableName: true // Model tableName will be the same as the model name
});

export default sequelize