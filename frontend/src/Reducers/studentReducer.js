import {
  STUDENT_EXAMSGIVEN_FAIL,
  STUDENT_EXAMSGIVEN_REQUEST,
  STUDENT_EXAMSGIVEN_SUCEESS,
} from '../constants/studentConstants.js'

// <-------- reducer  ----------->
export const studentExamsGivenReducer = (state = { exams: [] }, action) => {
  switch (action.type) {
    case STUDENT_EXAMSGIVEN_REQUEST:
      return { loading: true, exams: [] }
    case STUDENT_EXAMSGIVEN_SUCEESS:
      return { loading: false, exams: action.payload }
    case STUDENT_EXAMSGIVEN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
