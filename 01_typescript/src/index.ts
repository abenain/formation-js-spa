/**
 * Created by antoine on 22/12/2016.
 */

import * as numeral from 'numeral'
import * as $ from 'jquery'

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

interface TableConfig {
    columns:Column[]
    sort?:{
        field:string
        direction:'asc' | 'desc'
    }
}

const makeTable = (userConfig: TableConfig) => {
    const books: Book[] = []

    // Default config
    const config = Object.assign({
        sort: {
            field: 'title',
            direction: 'asc'
        }
    }, userConfig)

    const formatPrice = function (price:number) {
        var format = '$0,0.00',
            number = numeral(price)

        return number.format(format)
    }

    const renderHead = () => $('<thead></thead>').append(config.columns.map((column:Column) => {
        const th = $('<th></th>').text(column.text).data('key', column.key)
        if(column.key === config.sort.field){
            const iconPath = config.sort.direction === 'asc' ? '/assets/down-arrow.png' : '/assets/up-arrow.png'
            th.append($('<img class="ff-header-sort-indicator" src=' + iconPath + '>'))
        }
        return th
    }))
    const renderBody = () => $('<tbody></tbody>').append(books.sort((book1:Book, book2:Book) => {
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
    }).map((book:Book) => $('<tr></tr>')
        .append($('<td></td>').text(book.title))
        .append($('<td></td>').text(book.author))
        .append($('<td></td>').text(book.genre))
        .append($('<td></td>').text(book.publish_date))
        .append($('<td></td>').text(formatPrice(book.price)))
    ))

    return {
        updateBooks: (newBooks:Book[]) => {
            books.splice(0, books.length)
            books.push(...newBooks)
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
        render: () => $('<table></table>').append(renderHead()).append(renderBody())
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
        $('th').each((index, th: any) => $(th).click(() => clickOnHeader($(th).data('key'))))
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

