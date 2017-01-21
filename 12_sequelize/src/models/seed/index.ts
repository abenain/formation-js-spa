/**
 * Created by antoine on 19/01/2017.
 */
import * as q from 'q'
import * as process from 'process'

import sequelize from '../'

const authors = [{
    "id": 1,
    "firstname": "Matthew",
    "lastname": "Gambardella"
},{
    "id": 2,
    "firstname": "Kim",
    "lastname" : "Ralls"
},{
    "id": 3,
    "firstname": "Eva",
    "lastname" : "Corets"
},{
    "id": 4,
    "firstname": "Cynthia",
    "lastname" : "Randall"
},{
    "id": 5,
    "firstname": "Paula",
    "lastname" : "Thurman"
},{
    "id": 6,
    "firstname": "Stefan",
    "lastname" : "Knorr"
},{
    "id": 7,
    "firstname": "Peter",
    "lastname" : "Kress"
},{
    "id": 8,
    "firstname": "Tim",
    "lastname" : "O'Brien"
},{
    "id": 9,
    "firstname": "Mike",
    "lastname" : "Galos"
}]

const tags = [{
    id: 1,
    label: 'Horror'
}]

const books = [{
    "id": 1,
    "authorId": 1,
    "title": "XML Developer's Guide",
    "genre": "Computer",
    "price": 44.95,
    "publish_date": "2000-10-01",
    "description": "An in-depth look at creating applications with XML."
},{
    "id": 2,
    "authorId": 2,
    "title": "Midnight Rain",
    "genre": "Fantasy",
    "price": 5.95,
    "publish_date": "2000-12-16",
    "description": "A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world."
},{
    "id": 3,
    "authorId": 3,
    "title": "Maeve Ascendant",
    "genre": "Fantasy",
    "price": 5.95,
    "publish_date": "2000-11-17",
    "description": "After the collapse of a nanotechnology society in England, the young survivors lay the foundation for a new society."
},{
    "id": 4,
    "authorId": 3,
    "title": "Oberon's Legacy",
    "genre": "Fantasy",
    "price": 5.95,
    "publish_date": "2001-03-10",
    "description": "In post-apocalypse England, the mysterious agent known only as Oberon helps to create a new life for the inhabitants of London. Sequel to Maeve Ascendant."
},{
    "id": 5,
    "authorId": 3,
    "title": "The Sundered Grail",
    "genre": "Fantasy",
    "price": 5.95,
    "publish_date": "2001-09-10",
    "description": "The two daughters of Maeve, half-sisters, battle one another for control of England. Sequel to Oberon's Legacy."
}, {
    "id": 6,
    "authorId": 4,
    "title": "Lover Birds",
    "genre": "Romance",
    "price": 4.95,
    "publish_date": "2000-09-02",
    "description": "When Carla meets Paul at an ornithology conference, tempers fly as feathers get ruffled."
},{
    "id": 7,
    "authorId": 5,
    "title": "Splish Splash",
    "genre": "Romance",
    "price": 4.95,
    "publish_date": "2000-11-02",
    "description": "A deep sea diver finds true love twenty thousand leagues beneath the sea."
},{
    "id": 8,
    "authorId": 6,
    "title": "Creepy Crawlies",
    "genre": "Horror",
    "price": 4.95,
    "publish_date": "2000-12-06",
    "description": "An anthology of horror stories about roaches, centipedes, scorpions  and other insects."
},{
    "id": 9,
    "authorId": 7,
    "title": "Paradox Lost",
    "genre": "Science Fiction",
    "price": 6.95,
    "publish_date": "2000-11-02",
    "description": "After an inadvertant trip through a Heisenberg Uncertainty Device, James Salway discovers the problems of being quantum."
},{
    "id": 10,
    "authorId": 8,
    "title": "Microsoft .NET: The Programming Bible",
    "genre": "Computer",
    "price": 36.95,
    "publish_date": "2000-12-09",
    "description": "Microsoft's .NET initiative is explored in detail in this deep programmer's reference."
},{
    "id": 11,
    "authorId": 8,
    "title": "MSXML3: A Comprehensive Guide",
    "genre": "Computer",
    "price": 36.95,
    "publish_date": "2000-12-01",
    "description": "The Microsoft MSXML3 parser is covered in detail, with attention to XML DOM interfaces, XSLT processing, SAX and more."
},{
    "id": 12,
    "authorId": 9,
    "title": "Visual Studio 7: A Comprehensive Guide",
    "genre": "Computer",
    "price": 49.95,
    "publish_date": "2001-04-16",
    "description": "Microsoft Visual Studio 7 is explored in depth, looking at how Visual Basic, Visual C++, C#, and ASP+ are integrated into a comprehensive development environment."
}]

const bookTags = [{
    "BookId": 8,
    "TagId": 1
}]

console.log('Seeding database')

sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(() => {
  return sequelize.sync({force: true})
}).then(() => {
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
    console.log('Done creating booksTags')
    console.log('Created all items')
}).catch(error => {
    console.error(error)
    process.exit(1)
}).done(() => process.exit(0))

