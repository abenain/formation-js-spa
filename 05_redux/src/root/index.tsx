/**
 * Created by antoine on 22/12/2016.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import browserHistory from 'react-router/lib/browserHistory'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux'

import Application from 'application'
import Books from "books"
import Home from 'home'
import Settings from 'settings'
import reducer from "./reducer"

require('./styles.scss')

const store = createStore(reducer)

store.subscribe(() => {
    console.log('store changed')
    console.log(store.getState())
})

injectTapEventPlugin();

window.onload = () => {
    ReactDOM.render(
        <Application store={store}>
            <Router history={browserHistory}
                    createElement={(component: React.ComponentClass<any>, props: any) => React.createElement(component, Object.assign({}, props, { store }))}>
                <Route path='/'>
                    <Route path='/books' component={Books} />
                    <Route path='/settings' component={Settings} />
                    <IndexRoute component={Home}/>
                </Route>
            </Router>
        </Application>,
        document.getElementById('root')
    );
}


