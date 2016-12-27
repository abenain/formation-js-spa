import * as React from 'react'
import Link from 'react-router/lib/Link'
import {Paper} from 'material-ui'

const styles = require('./styles.scss')

const Home = () => <div className={styles.container}>
    <Paper className={styles.card}>
        <h3>This is the homepage. From here you can go to:</h3>
        <ul>
            <li><Link to="/books">Book list</Link></li>
        </ul>
    </Paper>
</div>

export default Home