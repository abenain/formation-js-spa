/**
 * Created by antoine on 22/12/2016.
 */

const numeral = require('numeral')
const $ = require('jquery')

var objects = [{
	"id": "bk001",
	"title": "Everyday Italian",
	"author": "Giada De Laurentiis",
	"genre": "Languages",
	"publish_date": "2005",
	"price": "30"
}, {
	"id": "bk002",
	"title": "Harry Potter",
	"author": "J K. Rowling",
	"genre": "Fantasy",
	"publish_date": "2005",
	"price": "29.99"
}, {
	"id": "bk003",
	"title": "XQuery Kick Start",
	"author": "James McGovern",
	"genre": "Computer",
	"publish_date": "2003",
	"price": "49.99"
}, {
	"id": "bk004",
	"title": "Learning XML",
	"genre": "Computer",
	"author": "Erik T. Ray",
	"publish_date": "2003",
	"price": "39.95"
}]

var formatPrice = function(price){
	var format = '$0,0.00',
		number = numeral(price.trim())

	return number.format(format)
}

window.onload = function () {
	$.get('http://codeberry.fr/1/books').done(function(result){
		var tableContents = ''
		for(var i=0; i<result.length; i++){
			tableContents += '<tr>'
			tableContents += '<td>' + result[i].title + '</td>'
			tableContents += '<td>' + result[i].author + '</td>'
			tableContents += '<td>' + result[i].genre + '</td>'
			tableContents += '<td>' + result[i].publish_date + '</td>'
			tableContents += '<td>' + formatPrice(result[i].price) + '</td>'
			tableContents += '</tr>'
		}

		document.getElementById('table-body').innerHTML = tableContents
	})
}

