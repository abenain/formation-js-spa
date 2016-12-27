/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'

const styles = require('./styles.scss')
const logo = require('./logo.svg')

interface Props{
    title: string
}

const Header = ({title}: Props) => <div className={styles.container}>
    <img src={logo} className={styles.logo} alt='React logo'/>
    <div className={styles.title}>{title}</div>
</div>

export default Header