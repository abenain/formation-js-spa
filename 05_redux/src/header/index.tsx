/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'
import { Store } from 'redux'

import {GlobalState} from "types";

const styles = require('./styles.scss')
const logo = require('./logo.svg')

interface Props{
    title: string,
    store: Store<GlobalState>
}

const Header = ({title, store}: Props) => <div className={styles.container}>
    <img src={logo} className={styles.logo} alt='React logo'/>
    <div className={styles.title}>{title}</div>
    <div className={styles.username}>{store.getState().username}</div>
</div>

export default Header