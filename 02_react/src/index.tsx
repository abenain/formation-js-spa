/**
 * Created by antoine on 22/01/2017.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'

const Welcome = (props: {name: string}) => (
    <div>
        <h1>Hello, {props.name}!</h1>
    </div>
)

const Application = () => (
    <div>
        <Welcome name="Sarah"/>
        <Welcome name="Joel"/>
        <Welcome name="Charlie"/>
    </div>
)
const rerender = () => {
    ReactDOM.render(
        <Application />,
        document.getElementById('root')
    )
}

window.onload = () => {
    setInterval(rerender, 1000);
}