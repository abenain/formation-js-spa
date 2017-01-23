/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'

const styles = require('./styles.scss')

interface State{
    name: string
}

class Form extends React.Component<{}, State>{

    public constructor(props: {}){
        super(props)
        this.state = {
            name: ''
        }
    }
    
    private handleFormSubmit = (event: React.SyntheticEvent<any>) => {
        console.log('Form was submitted')
        console.log('New name is: ' + this.state.name)
    }
    
    private handleNameChanged = (event: React.FormEvent<any>) => {
        const newName = (event.target as any).value
        this.setState({
            name: newName
        })
    }

    public render(){
        return (
            <div className={styles.container}>
                <label>
                    Name:
                    <input type="text"
                           name="name" 
                           value={this.state.name}
                           onChange={this.handleNameChanged} />
                </label>
                <button onClick={this.handleFormSubmit}>Save</button>
            </div>
        )
    }
}

export default Form