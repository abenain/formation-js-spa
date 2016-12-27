/**
 * Created by antoine on 22/12/2016.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Application from 'application'

require('./styles.scss')

injectTapEventPlugin();

window.onload = () => {
    ReactDOM.render(
        <Application />,
        document.getElementById('root')
    );
}


