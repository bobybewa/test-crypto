import { createStore, combineReducers } from 'redux'

import todoReducers from './reducer/todo'
import loadingReducer from './reducer/loading'

const rootStore = combineReducers({
    todoReducers,
    loadingReducer
})


const store = createStore(rootStore)

export default store