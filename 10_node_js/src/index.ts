/**
 * Created by antoine on 22/12/2016.
 */
import * as fs from 'fs'
import * as path from 'path'
import * as q from 'q'


const readFile = q.denodeify(fs.readFile)
const readDir = q.denodeify(fs.readdir)

// Construct path to data directory
const dirPath = path.join(__dirname, '..', 'data')

interface File {
    path: string
    contents: number
}

// async reading of data directory contents
readDir(dirPath).then((dirContents: string[]) => {

    // Initializing array of promises
    const promises: q.Promise<File>[] = []

    // Looping on filenames
    dirContents.forEach((filename: string) => {

        // Construct path to file
        const filePath = path.join(dirPath, filename)

        // adding readFile promise to the promise array
        promises.push(readFile(filePath).then((fileContents: number) => ({
            path: filePath,
            contents: fileContents
        })))
    })

    // return a promise that'll resolve when all promises in array have resolved
    return q.all(promises)

}).then((allFiles: File[]) => {

    console.log('--- Contents of directory ' + dirPath)
    
    // loop through array of results from readFile promises
    allFiles.forEach(file => {

        // Parsing file contents to a javascript object
        const fileContents = JSON.parse(file.contents.toString())

        // Printing file contents
        console.log('[' + fileContents.id + '] -> ' + file.path)
    })
    
    console.log('---')
    console.log(allFiles.length + ' items found')

}).catch((error) => {

    // Deal with errors
    throw error

})
