/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'
const fs = require("fs")
const path = require("path")

const BookController = {
    // Return all books
    index: (request: Express.Request, response: Express.Response) => {
        // path to JSON file
        const booksFilePath = path.join(__dirname, 'books.json')

        // Async read contents of JSON file
        fs.readFile(booksFilePath, (error: any, data: any) => {
            // deal with errors
            if(Boolean(error)){
                response.status(500)
                return response.end()
            }

            // parse data read from file
            const books = JSON.parse(data.toString())

            // return JSON data in HTTP reponse
            return response.json(books)
        })
    }
}

export default BookController