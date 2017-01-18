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

// async reading of data directory contents
readDir(dirPath).then((dirContents: string[]) => {

    // Looping on filenames
    dirContents.forEach((filename: string) => {

        // Construct path to file
        const filePath = path.join(dirPath, filename)

        // async reading of file contents
        readFile(filePath).then((data: number) => {
            // Printing file contents
            console.log('Contents of file ' + filePath)
            console.log(JSON.parse(data.toString()))
        }).catch((error) => {
            // Deal with errors
            throw error
        })
    })
}).catch((error) => {
    // Deal with errors
    throw error
})
