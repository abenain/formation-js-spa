const reducer = (state = {
    username: 'anonymous'
}, action: any) => {
    return Object.assign({}, state, action.payload)
}

export default reducer