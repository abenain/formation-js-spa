/**
 * Created by antoine on 22/12/2016.
 */
import * as fs from 'fs'
import * as path from 'path'

const dirPath = path.join(__dirname, '..', 'data')

fs.readdir(dirPath, (error, data) => {
    if(Boolean(error)){
        throw error
    }

    console.log('Contents of directory ' + dirPath)
    console.log(data)
})