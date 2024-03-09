import {combineReducers} from '@reduxjs/toolkit'
import {reducer as exampleReducer} from "../slices/example"
import {reducer as countriesReducer} from "../slices/countries"
import {reducer as authReducer} from "../slices/auth"


const rootReducer=combineReducers({
    example:exampleReducer,
    countries:countriesReducer,
    auth:authReducer
})

export default rootReducer