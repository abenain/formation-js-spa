/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'

const styles = require('./styles.scss')
const title = 'Test ReactJS Application'
const logo = require('./logo.svg')

const Header = () => <div className={styles.container}>
    <img src={logo} className={styles.logo} alt='React logo'/>
    <div className={styles.title}>{title}</div>
</div>

export default Header