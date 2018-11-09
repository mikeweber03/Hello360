import { createStore } from 'redux'

function modify_username(state = {username: 'initial name'}, action) {
    switch (action.type) {
        case 'MODIFY_USERNAME':
            return {username: action.payload}
        default:
            return state
    }
}

export default createStore(modify_username);