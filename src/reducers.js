import { combineReducers } from 'redux'

function khaleesiMode(state = '', action) {
    switch(action.type) {
        case 'SET_KHALEESI_MODE':
            return action.khaleesiMode
        default:
            return state
    }
}

function dragons(state = [], action) {
    switch(action.type) {
        case 'ADD_DRAGON':
            return [...state, action.dragon]
        default:
            return state
    }
}

function dragonFire(state = 0, action) {
    switch(action.type) {
        case 'SET_DRAGON_FIRE':
            return action.dragonFire
        default:
            return state
    }
}

const app = combineReducers({
    khaleesiMode,
    dragons,
    dragonFire
})

export default app