/**
 * Created by antoine on 22/12/2016.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import browserHistory from 'react-router/lib/browserHistory'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Store, createStore, applyMiddleware } from 'redux'

import Application from 'application'
import Books from "books"
import Home from 'home'
import Settings from 'settings'
import makeGlobalReducer from "./reducer"
import {GlobalState} from "types"

require('./styles.scss')

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory)

const store = createStore(makeGlobalReducer(), applyMiddleware(middleware)) as Store<GlobalState>

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


store.subscribe(() => {
    console.log('store changed')
    console.log(store.getState())
})

injectTapEventPlugin();

window.onload = () => {
    ReactDOM.render(
        <Application store={store}>
            <Router history={history}
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


