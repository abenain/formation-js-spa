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

class Table{
    constructor(private books: Book[]){}

    static formatPrice = function(price:number) {
        var format = '$0,0.00',
            number = numeral(price)

        return number.format(format)
    }

    public render() {
        return this.books.map(function (book:Book) {
            return '<tr>'
                + '<td>' + book.title + '</td>'
                + '<td>' + book.author + '</td>'
                + '<td>' + book.genre + '</td>'
                + '<td>' + book.publish_date + '</td>'
                + '<td>' + Table.formatPrice(book.price) + '</td>'
                + '</tr>'
        }).join('')

    }
}

window.onload = function () {
    let table = new Table([])

    // The following line will cause click handler to fail beacuse this is not what expected
    $('button.ff-render-table-button').click(table.render) // ERROR: Uncaught TypeError: Cannot read property 'map' of undefined

    $.get('http://codeberry.fr/1/books').done(function (result) {
        const table = new Table(result)

        $('#table-body').html(table.render())
    })
}

