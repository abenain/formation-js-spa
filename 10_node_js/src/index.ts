/**
 * Created by antoine on 22/12/2016.
 */
import * as fs from 'fs'
import * as path from 'path'

// Construct path to data directory
const dirPath = path.join(__dirname, '..', 'data')

// async reading of data directory contents
fs.readdir(dirPath, (error, dirContents) => {

    // Deal with errors
    if(Boolean(error)){
        throw error
    }

    // Looping on filenames
    dirContents.forEach((filename) => {

        // Construct path to file
        const filePath = path.join(dirPath, filename)

        // async reading of file contents
        fs.readFile(filePath, (error, data) => {

            // Deal with errors
            if(Boolean(error)){
                throw error
            }

            console.log('Contents of file ' + filePath)
            console.log(JSON.parse(data.toString()))
        })
    })
})
