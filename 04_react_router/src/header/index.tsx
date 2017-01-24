/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'
import { browserHistory }from 'react-router'
import { RaisedButton, FontIcon } from 'material-ui'

const styles = require('./styles.scss')
const logo = require('./logo.svg')

interface Props{
    title: string
}

const Header = ({title}: Props) => <div className={styles.container}>
    <img src={logo} className={styles.logo} alt='React logo'/>
    <div className={styles.title}>{title}</div>
    <div className={styles.buttonPanel}>
        <RaisedButton
            className={styles.button}
            icon={<FontIcon className="material-icons">import_contacts</FontIcon>}
            onClick={() => { browserHistory.push('/books') }}
        />
        <RaisedButton
            className={styles.button}
            icon={<FontIcon className="material-icons">view_list</FontIcon>}
            onClick={() => { browserHistory.push('/books?view=list') }}
        />
        <RaisedButton
            className={styles.button}
            icon={<FontIcon className="material-icons">view_module</FontIcon>}
            onClick={() => { browserHistory.push('/books?view=grid') }}
        />
        <div className={styles.separator} />
        <RaisedButton
            className={styles.button}
            icon={<FontIcon className="material-icons">insert_drive_file</FontIcon>}
            onClick={() => { browserHistory.push('/documents') }}
        />
        <div className={styles.separator} />
        <RaisedButton
            className={styles.button}
            primary={true}
            icon={<FontIcon className="material-icons">home</FontIcon>}
            onClick={() => { browserHistory.push('/') }}
        />
    </div>
</div>

export default Header