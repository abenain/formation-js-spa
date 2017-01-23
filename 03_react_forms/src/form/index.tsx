/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'

const styles = require('./styles.scss')

interface State{
    name: string
}

class Form extends React.Component<{}, State>{

    public refs: {
        name: HTMLInputElement,
        [k: string]: React.ReactInstance
    }

    public constructor(props: {}){
        super(props)
        this.state = {
            name: ''
        }
    }
    
    private handleFormSubmit = (event: React.SyntheticEvent<any>) => {
        console.log('Form was submitted')
        console.log('New name is: ' + this.refs.name.value)
    }

    public render(){
        return (
            <div className={styles.container}>
                <label>
                    Name:
                    <input type="text"
                           name="name"
                           ref="name"
                           defaultValue='Enter your name' />
                </label>
                <button onClick={this.handleFormSubmit}>Save</button>
            </div>
        )
    }
}

export default Form