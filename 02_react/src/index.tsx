/**
 * Created by antoine on 22/01/2017.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'

interface Props {
    date: Date
}

const Clock = (props: Props) => (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
)

const rerender = () => {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    )
}

window.onload = () => {
    setInterval(rerender, 1000);
}