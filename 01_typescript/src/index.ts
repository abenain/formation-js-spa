/**
 * Created by antoine on 22/12/2016.
 */

import * as numeral from 'numeral';
import * as jquery from 'jquery';

interface Book {
    title:string
    author:string
    genre:string
    publish_date:string
    price:number
}

var formatPrice = function (price:number) {
    var format = '$0,0.00',
        number = numeral(price)

    return number.format(format)
}

window.onload = function () {
    jquery.get('http://localhost:3000/books').done(function (result) {
        var tableContents = ''

        result.forEach((book:Book) => {
            tableContents += '<tr>'
            tableContents += '<td>' + book.title + '</td>'
            tableContents += '<td>' + book.author + '</td>'
            tableContents += '<td>' + book.genre + '</td>'
            tableContents += '<td>' + book.publish_date + '</td>'
            tableContents += '<td>' + formatPrice(book.price) + '</td>'
            tableContents += '</tr>'
        })

        document.getElementById('table-body').innerHTML = tableContents
    })
}

