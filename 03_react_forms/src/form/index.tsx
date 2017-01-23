/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'

const styles = require('./styles.scss')

class Form extends React.Component<{}, {}>{

    private handleFormSubmit = (event: React.SyntheticEvent<any>) => {
        console.log('Form was submitted')
    }

    public render(){
        return (
            <div className={styles.container}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <button onClick={this.handleFormSubmit}>Save</button>
            </div>
        )
    }
}

export default Form