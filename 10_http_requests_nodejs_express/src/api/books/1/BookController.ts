/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'
import * as q from 'q'
import * as fs from 'fs'
import * as path from 'path'

const BookController = {
    // Return all books
    index: (request:Express.Request, response:Express.Response) => {
        // constructing path to data directory
        const dataDirPath = path.join(__dirname, '..', '..', '..', '..', 'data')

        // Initializing result array of books
        const books:Object[] = []

        // create promise that'll resolve when async read of directory contents is done
        q.nfcall(fs.readdir, dataDirPath).then((bookFileNames:string[]) => {
            // Initialize array of promises
            const promises = []

            // For each book file create a promise that'll resolve when async file read is done
            for (const currentFile of bookFileNames) {
                // constructing path to current book file
                const currentFilePath = path.join(dataDirPath, currentFile)

                // Creating promise and add it to promise array
                promises.push(q.nfcall(fs.readFile, currentFilePath))
            }

            // return a single promise that'll resolve when all promises in the array have
            return q.all(promises)
        }).then((allBookData:Object[]) => {
            // Now every book file has been read, we have access to an array of raw book data
            for (const currentBookData of allBookData) {
                // parse data read from file
                const book = JSON.parse(currentBookData.toString())

                // add book to result array
                books.push(book)
            }
            return response.json(books)
        }).catch((error:Error) => {
            // deal with errors
            console.error(error)
            response.status(500)
            return response.end()
        })
    }
}

export default BookController