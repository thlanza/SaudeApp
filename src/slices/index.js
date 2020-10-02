import { combineReducers } from 'redux'

import listasReducer from './listas/listasSlice'

const rootReducer = combineReducers({
  listas: listasReducer,
})

export default rootReducer