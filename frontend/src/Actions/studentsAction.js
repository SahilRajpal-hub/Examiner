import axios from 'axios'
import {
  STUDENT_EXAMSGIVEN_FAIL,
  STUDENT_EXAMSGIVEN_REQUEST,
  STUDENT_EXAMSGIVEN_SUCEESS,
} from '../constants/studentConstants.js'

export const examsGiven = () => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_EXAMSGIVEN_REQUEST })

    const { data } = await axios.get('/api/examsgiven')

    dispatch({
      type: STUDENT_EXAMSGIVEN_SUCEESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: STUDENT_EXAMSGIVEN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
