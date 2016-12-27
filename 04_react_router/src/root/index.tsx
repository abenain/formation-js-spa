/**
 * Created by antoine on 22/12/2016.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import hashHistory from 'react-router/lib/hashHistory'
import injectTapEventPlugin from 'react-tap-event-plugin';


import Application from 'application'
import Books from "books"
import Home from 'home'

require('./styles.scss')

injectTapEventPlugin();

window.onload = () => {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={Application}>
                <Route path='/books' component={Books} />
                <IndexRoute component={Home}/>
            </Route>
        </Router>,
        document.getElementById('root')
    );
}


