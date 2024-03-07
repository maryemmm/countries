import {combineReducers} from '@reduxjs/toolkit'
import {reducer as exampleReducer} from "../slices/example"

const rootReducer=combineReducers({
    example:exampleReducer
})

export default rootReducer