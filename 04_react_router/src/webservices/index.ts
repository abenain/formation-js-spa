/**
 * Created by antoine on 24/01/2017.
 */
import * as q from 'q'

import { Document } from '../types'

export const updateDocument = (newDocument: Document): q.Promise<string> => {
    const deferred = q.defer<string>()
    const seed = Math.round(Math.random() * 100)
    const randomFail = !Boolean(seed % 10)
    const randomDelay = 30 * seed

    // Mise a jour du document
    setTimeout(() => {
        if(randomFail){
            return deferred.reject(new Error('Update document FAILED'))
        }
        return deferred.resolve('Updated document')
    }, randomDelay)

    return deferred.promise
}

export const createDocument = (newDocument: Document): q.Promise<string> => {
    const deferred = q.defer<string>()
    const seed = Math.round(Math.random() * 100)
    const randomFail = !Boolean(seed % 10)
    const randomDelay = 30 * seed

    // Mise a jour du document
    setTimeout(() => {
        if(randomFail){
            return deferred.reject(new Error('Create document FAILED'))
        }
        return deferred.resolve('Created document')
    }, randomDelay)

    return deferred.promise
}