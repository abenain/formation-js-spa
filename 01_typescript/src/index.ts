/**
 * Created by antoine on 22/12/2016.
 */

import * as numeral from 'numeral';
import * as $ from 'jquery';

interface Book {
    title:string
    author:string
    genre:string
    publish_date:string
    price:number
}

const makeTable = (bookList?: Book[]) => {
    const books = bookList || []

    const formatPrice = function (price:number) {
        var format = '$0,0.00',
            number = numeral(price)

        return number.format(format)
    }

    return {
        updateBooks: (newBooks: Book[]) => {
            books.splice(0, books.length)
            books.push(...newBooks)
        },
        render: () => books.map((book:Book) => {
            return '<tr>'
                + '<td>' + book.title + '</td>'
                + '<td>' + book.author + '</td>'
                + '<td>' + book.genre + '</td>'
                + '<td>' + book.publish_date + '</td>'
                + '<td>' + formatPrice(book.price) + '</td>'
                + '</tr>'
        }).join('')
    }
}

window.onload = function () {
    const table = makeTable([])

    $('button.ff-render-table-button').click(table.render)

    $.get('http://localhost:3000/books').done(function (result) {
        table.updateBooks(result)

        $('#table-body').html(table.render())
    })
}

