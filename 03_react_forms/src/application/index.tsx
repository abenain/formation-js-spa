import * as React from 'react'
import {MuiThemeProvider, lightBaseTheme, getMuiTheme} from 'material-ui/styles';

import Header from 'header'
import Form from "form"
import List from "list"

const styles = require('./styles.scss')
const title = 'Test ReactJS Application'

const documents = [{
    title: 'How to grow funghi',
    reference: 'PCD-002301',
    object: 'Describes in depth how to grow a large population of funghi',
    nature: 3,
},{
    title: 'Incident report #33',
    reference: 'NOT-004415',
    object: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum massa quam, vel lobortis quam ultricies ',
    nature: 2
},{
    title: 'Memo',
    reference: 'MEM-0EE415',
    object: 'Sem scelerisque felis, at euismod quam nisl id turpis. Curabitur eget libero id est blandit tincidunt quis non risus.',
    nature: 1
}]

const Application = () => <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
        <Header title={title}></Header>
        <div className={styles.container}>
            <div className={styles.sidePanel}>
                <List documents={documents} />
            </div>
            <div className={styles.formPanel}>
                <Form />
            </div>
        </div>
    </div>
</MuiThemeProvider>

export default Application