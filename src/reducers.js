import { combineReducers } from 'redux'
import spaces from './spacesReducer'
import apps from './appsReducer'
import display from './displayReducer'

const reducers = combineReducers(
    {
        apps: apps,
        spaces: spaces,
        display: display
    }
)

export default reducers