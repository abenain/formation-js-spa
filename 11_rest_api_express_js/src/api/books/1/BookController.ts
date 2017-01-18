/**
 * Created by antoine on 15/01/2017.
 */
import * as Express from 'express'
const fs = require("fs")
const path = require("path")

const BookController = {
    // Return all books
    index: (request:Express.Request, response:Express.Response) => {
        // consrtucting path to data directory
        const dataDirPath = path.join(__dirname, '..', '..', '..', '..', 'data')

        // Read contents of directory
        fs.readdir(dataDirPath, (error:Error, bookFileNames:string[]) => {
            // deal with errors
            if (Boolean(error)) {
                response.status(500)
                return response.end()
            }

            // Initialize result array of books
            const books:Object[] = []

            // Initialize mutable variable to remember how many files we read
            let readFilesCounter = 0

            // For each book file, perform async reading of file
            for (const currentFile of bookFileNames) {

                // consrtucting path to current book file
                const currentFilePath = path.join(dataDirPath, currentFile)

                fs.readFile(currentFilePath, (error:Error, data:any) => {
                    readFilesCounter = readFilesCounter + 1

                    if (Boolean(error)) {
                        // deal with errors
                        console.error('error while reading file: ' + currentFilePath)
                        console.error(error)
                    } else {
                        // parse data read from file
                        const book = JSON.parse(data.toString())

                        // add book to result array
                        books.push(book)
                    }

                    // If all book files have been read
                    if (readFilesCounter === bookFileNames.length) {
                        // If result array contains exact number of book files, it's a success
                        if (books.length === bookFileNames.length) {
                            // return JSON data in HTTP reponse
                            return response.json(books)
                        }

                        // Else, something went wrong
                        response.status(500)
                        return response.end()
                    }
                })
            }
        })
    }
}

export default BookController