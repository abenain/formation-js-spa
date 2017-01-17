/**
 * Created by antoine on 17/01/2017.
 */
import * as $ from 'jquery'
import * as moment from 'moment'
import * as numeral from 'numeral'

import { Book, TableConfig, Column, Filter } from './types'

const formatPrice = (price: number) => {
    var format = '$0,0.00',
        number = numeral(price)

    return number.format(format)
}

const formatDate = (date: string) => {
    return moment(date).format('Qo MMMM YYYY')
}

export const renderFilters = (config: TableConfig) => {
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

const renderHead = (config: TableConfig) => $('<thead></thead>').append(config.columns.map((column: Column) => {
    const th = $('<th></th>').text(column.text).data('key', column.key)

    if(column.key === config.sort.field){
        const iconPath = config.sort.direction === 'asc' ? '/assets/down-arrow.png' : '/assets/up-arrow.png'
        th.append($('<img class="ff-header-sort-indicator" src=' + iconPath + '>'))
    }

    return th
}))

const renderBody = (books: Book[]) => $('<tbody></tbody>').append(books.map((book:Book) => $('<tr></tr>')
    .append($('<td></td>').text(book.title))
    .append($('<td></td>').text(book.author))
    .append($('<td></td>').text(book.genre))
    .append($('<td></td>').text(formatDate(book.publish_date)))
    .append($('<td></td>').text(formatPrice(book.price)))
))

export const renderTable = (books: Book[], config: TableConfig) => $('<table></table>').append(renderHead(config)).append(renderBody(books))