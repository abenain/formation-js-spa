/**
 * Created by antoine on 22/12/2016.
 */

import * as numeral from 'numeral'
import * as $ from 'jquery'
import * as _ from 'lodash'

interface Book {
    title:string
    author:string
    genre:string
    publish_date:string
    price:number
    [key:string]:string | number
}

interface Column {
    key:string,
    text:string
}

interface Filter {
    key: string,
    value: string,
    include: boolean
}

interface TableConfig {
    columns:Column[]
    sort?:{
        field:string
        direction:'asc' | 'desc'
    },
    filters?: Filter[]
}

const makeTable = (userConfig: TableConfig) => {
    const books: Book[] = []

    // Default config
    const config = Object.assign({
        sort: {
            field: 'title',
            direction: 'asc'
        },
        filters: [{
            key: 'genre',
            value: 'Romance',
            include: true
        },{
            key: 'genre',
            value: 'Computer',
            include: true
        },{
            key: 'genre',
            value: 'Science Fiction',
            include: true
        },{
            key: 'genre',
            value: 'Fantasy',
            include: true
        },{
            key: 'genre',
            value: 'Horror',
            include: true
        }]
    }, userConfig)

    const formatPrice = function (price:number) {
        var format = '$0,0.00',
            number = numeral(price)

        return number.format(format)
    }

    const getBooksToDisplay = () => books.filter((book: Book) => {
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
    }).sort((book1:Book, book2:Book) => {
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
    })

    const renderFilters = () => {
        const filters = config.filters.map((filter: Filter) => {
            const label = $('<label></label>').text(filter.value)
            $(label).attr('for', filter.value)

            const input = $('<input type="checkbox">')
            $(input).attr('id', filter.value).data('key', filter.key)
            if(filter.include){
                $(input).prop('checked', true)
            }

            return $('<div class="ff-checbox-container"></div>').append(label, input)
        })
        return $('<div></div>').append(filters)
    }

    const renderHead = () => $('<thead></thead>').append(config.columns.map((column:Column) => {
        const th = $('<th></th>').text(column.text).data('key', column.key)
        if(column.key === config.sort.field){
            const iconPath = config.sort.direction === 'asc' ? '/assets/down-arrow.png' : '/assets/up-arrow.png'
            th.append($('<img class="ff-header-sort-indicator" src=' + iconPath + '>'))
        }
        return th
    }))
    const renderBody = () => $('<tbody></tbody>').append(getBooksToDisplay().map((book:Book) => $('<tr></tr>')
        .append($('<td></td>').text(book.title))
        .append($('<td></td>').text(book.author))
        .append($('<td></td>').text(book.genre))
        .append($('<td></td>').text(book.publish_date))
        .append($('<td></td>').text(formatPrice(book.price)))
    ))
    const renderTable = () => $('<table></table>').append(renderHead()).append(renderBody())

    return {
        updateBooks: (newBooks:Book[]) => {
            books.splice(0, books.length)
            books.push(...newBooks)
        },
        filterChanged: (event: any) => {
            const changedFilter = {
                key: $(event.target).data('key'),
                value: $(event.target).attr('id'),
                include: $(event.target).prop('checked')
            }
            config.filters.forEach((filterFromConfig: Filter) => {
                if(filterFromConfig.key === changedFilter.key && filterFromConfig.value === changedFilter.value){
                    filterFromConfig.include = changedFilter.include
                }
            })
        },
        sortOnColumn: (columnKey: string) => {
            let newSortDirection: 'asc' | 'desc' = 'asc'
            if(columnKey === config.sort.field && config.sort.direction === 'asc'){
                newSortDirection = 'desc'
            }
            config.sort = {
                field: columnKey,
                direction: newSortDirection
            }
        },
        render: () => $('<div></div>').append(renderFilters(), renderTable())
    }
}

window.onload = function () {
    const table = makeTable({
        columns: [{
            key: 'title',
            text: 'Titre'
        }, {
            key: 'author',
            text: 'Auteur'
        }, {
            key: 'genre',
            text: 'Genre'
        }, {
            key: 'publish_date',
            text: 'Date de publication'
        }, {
            key: 'price',
            text: 'Prix'
        }],
        sort: {
            field: 'price',
            direction: 'desc'
        }
    })

    const renderTable = () => {
        const tablePanel = $('div.ff-table-panel')
        $(tablePanel).html('')
        $(tablePanel).append(table.render())
        $('th').each((index, th:any) => $(th).click(() => clickOnHeader($(th).data('key'))))
        $('input[type="checkbox"]').each((index, filter) => $(filter).change(filterChanged))
    }

    const filterChanged = (event: any) => {
        table.filterChanged(event)
        renderTable()
    }

    const clickOnHeader = (columnKey: string) => {
        table.sortOnColumn(columnKey)
        renderTable()
    }

    $.get('http://codeberry.fr/1/books').done(function (result) {
        table.updateBooks(result)

        renderTable()
    })
}

