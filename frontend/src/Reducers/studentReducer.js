import {
  STUDENT_EXAMSGIVEN_FAIL,
  STUDENT_EXAMSGIVEN_REQUEST,
  STUDENT_EXAMSGIVEN_SUCCESS,
  STUDENT_LOGIN_FAIL,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_REGISTER_FAIL,
  STUDENT_REGISTER_REQUEST,
  STUDENT_REGISTER_SUCCESS,
} from '../constants/studentConstants.js'

// <-------- get given exams array reducer  ----------->
export const studentExamsGivenReducer = (state = { exams: [] }, action) => {
  switch (action.type) {
    case STUDENT_EXAMSGIVEN_REQUEST:
      return { loading: true, exams: [] }
    case STUDENT_EXAMSGIVEN_SUCCESS:
      return { loading: false, exams: action.payload }
    case STUDENT_EXAMSGIVEN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// <-------- student login reducer  ----------->
export const studentLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
      return { loading: true }
    case STUDENT_LOGIN_SUCCESS:
      return { loading: false, studentInfo: action.payload }
    case STUDENT_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    // case USER_LOGOUT:
    //   return {}
    default:
      return state
  }
}

// <-------- student register reducer  ----------->
export const studentRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_REGISTER_REQUEST:
      return { loading: true }
    case STUDENT_REGISTER_SUCCESS:
      return { loading: false, studentInfo: action.payload }
    case STUDENT_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
