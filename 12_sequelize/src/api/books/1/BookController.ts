/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'
import * as Sequelize from 'sequelize'

import sequelize from '../../../models'

const BookController = {
    // Return all books
    index: (request:Express.Request, response:Express.Response) => {
        sequelize.models['Book'].findAll().then((books: Sequelize.Instance<any>[]) => {
            response.json(books.map(book => book.toJSON()))
        }).catch((error: Error) => {
            console.error(error)
            response.status(500)
            response.end()
        })
        .done()
    },

    // Return one book
    show: (request:Express.Request, response:Express.Response) => {
        const requestedBookId = request.params.bookId

        sequelize.models['Book'].findById(requestedBookId).then((book: Sequelize.Instance<any>) => {
            if(book){
                response.json(book.toJSON())
            }

            response.status(404)
            response.end()
        }).catch((error: Error) => {
            console.error(error)
            response.status(500)
            response.end()
        })
        .done()
    },
    
    // Create a book
    create: (request:Express.Request, response:Express.Response) => {
        sequelize.models['Book'].create(request.body).then((book: Sequelize.Instance<any>) => {
            response.status(201).json(book.get('id'))
        }).catch((error: Error) => {
            response.status(500)
            response.end()
        }).done()
    }
}

export default BookController