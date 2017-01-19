/**
 * Created by antoine on 19/01/2017.
 */
import sequelize from './models'

sequelize.models['Book'].findAll().then(books => {
    console.log(books.map(book => book.toJSON()))
}).catch(console.error)
.done()

