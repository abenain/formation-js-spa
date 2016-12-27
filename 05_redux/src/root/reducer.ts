import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const settingsReducer = (state: any, action: any) => {
    return Object.assign({ username: 'anonymous' }, state, action.payload)
}

const makeGlobalReducer = () => {
    return combineReducers({
        settings: settingsReducer,
        routing: routerReducer
    })
}

export default makeGlobalReducer
