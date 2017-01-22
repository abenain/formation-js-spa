/**
 * Created by antoine on 22/01/2017.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'

interface State {
    date: Date
}

class Clock extends React.Component<{}, State> {
    public constructor(props: {}){
        super(props)
        this.state = {
            date: new Date()
        }
    }
    private timerID: number
    public componentDidMount = () => {
        this.timerID = setInterval(
            () => this.updateTime(),
            1000
        );
    }
    public componentWillUnmount = () => {
        clearInterval(this.timerID)
    }
    private updateTime = () => {
        this.setState({
            date: new Date()
        })
    }
    public render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
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