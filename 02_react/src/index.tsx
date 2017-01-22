/**
 * Created by antoine on 22/01/2017.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'

class Clock extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

const rerender = () => {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    )
}

window.onload = () => {
    setInterval(rerender, 1000);
}