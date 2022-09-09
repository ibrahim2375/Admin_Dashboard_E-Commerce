import { admin_reducer } from './adminReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
    admin_data: admin_reducer,
})

