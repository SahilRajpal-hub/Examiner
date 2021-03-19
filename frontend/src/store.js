import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  studentExamsGivenReducer,
  studentLoginReducer,
  studentRegisterReducer,
} from './Reducers/studentReducer.js'

const reducers = combineReducers({
  studentExamsGiven: studentExamsGivenReducer,
  studentLogin: studentLoginReducer,
  studentRegister: studentRegisterReducer,
})

const studentInfoFromStorage = localStorage.getItem('studentInfo')
  ? JSON.parse(localStorage.getItem('studentInfo'))
  : null

const initialState = {
  studentLogin: {
    studentInfo: studentInfoFromStorage,
  },
}
const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
