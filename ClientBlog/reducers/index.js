import { combineReducers } from 'redux'
import { default as articles } from './articles'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  articles,
  routing: routerReducer
})

export default rootReducer
