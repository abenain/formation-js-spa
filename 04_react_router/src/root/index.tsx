/**
 * Created by antoine on 22/12/2016.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import hashHistory from 'react-router/lib/hashHistory'
import injectTapEventPlugin from 'react-tap-event-plugin';


import Application from 'application'
import Books from "books"

require('./styles.scss')

injectTapEventPlugin();

window.onload = () => {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={Application}>
                <Route path='/books' component={Books} />
            </Route>
        </Router>,
        document.getElementById('root')
    );
}


