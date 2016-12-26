/**
 * Created by antoine on 22/12/2016.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import Application from 'application'

//require('./styles.scss')

window.onload = () => {
    ReactDOM.render(
        <Application />,
        document.getElementById('root')
    );
}


