import { combineReducers,configureStore } from "@reduxjs/toolkit";
import ProductReducer from './state/reducers/ProductReducer'
import userReducer from './state/reducers/userReducer'

const reducer=combineReducers({ProductReducer,userReducer})

const Store=configureStore({reducer:reducer})

export default Store