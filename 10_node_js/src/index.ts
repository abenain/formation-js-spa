/**
 * Created by antoine on 22/12/2016.
 */
import * as fs from 'fs'
import * as path from 'path'

const filePath = path.join(__dirname, '..', 'data', 'bk101.json')

fs.readFile(filePath, (error, data) => {
    if(Boolean(error)){
        throw error
    }

    console.log('Contents of file ' + filePath)
    console.log(JSON.parse(data.toString()))
})