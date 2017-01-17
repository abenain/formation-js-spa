/**
 * Created by antoine on 17/01/2017.
 */
import * as _ from 'lodash'

import { Book, TableConfig } from "./types";

const createFilterFunction = (config: TableConfig) => {
    return (book: Book) => {
        // Grouping filters by key
        const filtersGroupedByKey = _.groupBy(config.filters, 'key')

        // Looping on each key
        let includeBook = true
        for(let key in filtersGroupedByKey){
            const filtersForKey = filtersGroupedByKey[key]

            // Looping on each filter for key
            for(let filter of filtersForKey){

                // If filter include is false, and book matches filter, exclude book
                if(!filter.include && filter.value === book[key]){
                    includeBook = false

                    // break to avoid further iterations
                    break
                }
            }
            if(!includeBook){
                // as soon as a filter excludes the book, break loop
                break
            }
        }
        return includeBook
    }
}

const createSortFunction = (config: TableConfig) => {
    return (book1: Book, book2: Book) => {
        // Destructuring config for easy access to sort options
        const {direction, field} = config.sort

        // sort direction
        const coef = direction === 'asc' ? -1 : 1

        if (book1[field] < book2[field]) {
            return coef
        }
        if (book1[field] > book2[field]) {
            return -1 * coef
        }
        return 0
    }
}

const BookStore = (config: TableConfig) => {
    const books: Book[] = []
    
    return {
        getBooks: () => books.filter(createFilterFunction(config)).sort(createSortFunction(config)),
        setBooks: (newBooks: Book[]) => {
            books.splice(0, books.length)
            books.push(...newBooks)
        },
        updateConfig: (newConfig: TableConfig) => {
            Object.assign(config, newConfig)
        }
    }
}

export default BookStore