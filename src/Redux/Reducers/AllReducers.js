

import {combineReducers} from "redux"
import {MyReducers} from "./Reducer"

export const rootReducer = combineReducers({
    Temprature:MyReducers
})