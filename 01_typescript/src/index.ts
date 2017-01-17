/**
 * Created by antoine on 22/12/2016.
 */
import * as $ from 'jquery'

import Table from './Table'

window.onload = function () {
    const table = Table({
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

    const render = () => {
        // Find target div
        const tablePanel = $('div.ff-table-panel')

        // Clearing contents
        $(tablePanel).html('')

        // Rendering
        $(tablePanel).append(table.render())

        // Adding event callbacks
        $('th').each((index, th:any) => $(th).click(() => clickOnHeader($(th).data('key'))))
        $('input[type="checkbox"]').each((index, filter) => $(filter).change(filterChanged))
    }

    const filterChanged = (event: any) => {
        table.filterChanged(event)
        render()
    }

    const clickOnHeader = (columnKey: string) => {
        table.sortOnColumn(columnKey)
        render()
    }

    // Fetch books from webservice
    $.get('http://codeberry.fr/1/books').done(function (result) {
        // Update table data
        table.updateBooks(result)

        // render to DOM
        render()
    })
}

