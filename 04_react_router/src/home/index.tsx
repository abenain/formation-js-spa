import * as React from 'react'
import Link from 'react-router/lib/Link'
import {Paper} from 'material-ui'

const styles = require('./styles.scss')

const Home = () => <div className={styles.container}>
    <Paper className={styles.card}>
        <h2>This is the homepage.</h2>
        <h4>From here you can navigate to:</h4>
        <ul>
            <li className={styles.homeMenuEntry}>
                Books:  <Link to="/books?view=list">List</Link> / <Link to="/books?view=grid">Grid</Link>
            </li>
            <li className={styles.homeMenuEntry}>
                <Link to="/documents">Document list</Link>
            </li>
        </ul>
    </Paper>
</div>

export default Home