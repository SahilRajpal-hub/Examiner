import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { studentExamsGivenReducer } from './Reducers/studentReducer.js'

const reducers = combineReducers({
  studentExamsGiven: studentExamsGivenReducer,
})
const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store