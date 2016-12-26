/**
 * Created by antoine on 22/12/2016.
 */

import * as numeral from 'numeral';
import * as jquery from 'jquery';

var formatPrice = function(price: number){
	var format = '$0,0.00',
		number = numeral(price)

	return number.format(format)
}

window.onload = function () {
	jquery.get('http://localhost:3000/books').done(function(result){
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

