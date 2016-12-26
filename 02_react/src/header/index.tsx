/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'

const styles: any = require('./styles.scss')
const title = 'Test ReactJS Application'

const Header = () => <div className={styles.container}>{title}</div>

export default Header