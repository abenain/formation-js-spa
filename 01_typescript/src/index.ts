/**
 * Created by antoine on 22/12/2016.
 */
import * as $ from 'jquery'

const variableScoping1 = () => {
    console.log('variableScoping1')

    var baseIndex = 100

    function getIndex() {
        return baseIndex + 33
    }

    console.log(getIndex()) // 133
}

const variableScoping2 = () => {
    console.log('variableScoping2')

    function getIndex() {
        var baseIndex = 100
        return baseIndex + 33
    }

    // console.log(baseIndex) // Uncaught ReferenceError: baseIndex is not defined
    console.log(getIndex()) // 133
}

const variableScoping3 = () => {
    console.log('variableScoping3')

    var foo = 1

    function bar() {
        if (!foo) {
            var foo = 10
        }
        console.log(foo)
    }

    bar() // 10
}

const variableScoping4 = () => {
    console.log('variableScoping4')

    var a = 1
    function b() {
        a = 10
        return
        function a() {}
    }
    b()
    console.log(a) // 1
}

const renderContents = () => {
    const container = $('<div></div>').css('paddingTop', '50px')
    container.append($('<h1></h1>').text('Variable scoping in javascript'))
    container.append($('<p></p>').text('Salut la compagnie'))
    return container
}



window.onload = function () {
    variableScoping1()
    variableScoping2()
    variableScoping3()
    variableScoping4()

    const tablePanel = $('div.ff-table-panel')
    $(tablePanel).append(renderContents())
}

