/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'

const styles = require('./styles.scss')

const Form = () => <form action="http://codeberry.fr/1/books" className={styles.container}>
    <label>
        Name:
        <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
</form>

export default Form