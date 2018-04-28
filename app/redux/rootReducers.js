import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import todosReducer from '../todos/reducers'
import foodsReducer from '../foods/reducers'

const rootReducers = combineReducers({
  nav: nav,
  todosReducer,
  foodsReducer,
  form: formReducer
})

export default rootReducers