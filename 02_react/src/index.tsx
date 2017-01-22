/**
 * Created by antoine on 22/01/2017.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'

const rerender = () => {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )

    ReactDOM.render(
        element,
        document.getElementById('root')
    )
}

window.onload = () => {
    setInterval(rerender, 1000);
}