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

const makeTable = function (books:Book[]) {
    const formatPrice = function (price:number) {
        var format = '$0,0.00',
            number = numeral(price)

        return number.format(format)
    }

    return {
        books: books,
        render: function () {
            return this.books.map(function (book:Book) {
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
}


window.onload = function () {
    let table = makeTable([])

    // The following line will cause click handler to fail beacuse this is not what expected
    $('button.ff-render-table-button').click(table.render) // ERROR: Uncaught TypeError: Cannot read property 'map' of undefined

    $.get('http://localhost:3000/books').done(function (result) {
        table = makeTable(result)

        $('#table-body').html(table.render())
    })
}

