/**
 * Created by antoine on 19/01/2017.
 */
import * as q from 'q'
import * as process from 'process'

import sequelize from '../'
import { authors } from './authors'
import { users } from './users'
import { books } from './books'
import { bookTags } from './bookTags'
import { tags } from './tags'
import { reports } from './reports'

console.log('Seeding database')

sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(() => {
  return sequelize.sync({force: true})
}).then(() => {
    console.log('Creating users...')
    const promises = []
    for (let user of users) {
        promises.push(sequelize.models['User'].create(user))
    }
    return q.all(promises)
}).then(() => {
    console.log('Done creating users')
    console.log('Creating authors...')
    const promises = []
    for (let author of authors) {
        promises.push(sequelize.models['Author'].create(author))
    }
    return q.all(promises)
}).then(() => {
    console.log('Done creating authors')
    console.log('Creating tags...')

    const promises = []
    for (let tag of tags) {
        promises.push(sequelize.models['Tag'].create(tag))
    }
    return q.all(promises)
}).then(() => {
    const promises = []

    console.log('Done creating tags')
    console.log('Creating books...')

    for (let book of books) {
        promises.push(sequelize.models['Book'].create(book))
    }
    return q.all(promises)
}).then(() => {
    const promises = []
    console.log('Done creating books')
    console.log('Creating bookTags...')

    for (let bookTag of bookTags) {
        promises.push(sequelize.models['BookTag'].create(bookTag))
    }
    return q.all(promises)
}).then(() => {
    const promises = []
    console.log('Done creating booksTags')
    console.log('Creating reports...')

    for (let report of reports) {
        promises.push(sequelize.models['Report'].create(report))
    }
    return q.all(promises)
}).then(() => {
    console.log('Done creating reports')
    console.log('Created all items')
}).catch(error => {
    console.error(error)
    process.exit(1)
}).done(() => process.exit(0))

