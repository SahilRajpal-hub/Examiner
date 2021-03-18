import axios from 'axios'
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

// <-------- get given exams array action  ----------->
export const examsGiven = () => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_EXAMSGIVEN_REQUEST })

    const { data } = await axios.get('/api/examsgiven')

    dispatch({
      type: STUDENT_EXAMSGIVEN_SUCCESS,
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

// <-------- studentlogin action  ----------->
export const studentLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/students/login',
      { email, password },
      config
    )

    dispatch({
      type: STUDENT_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('studentInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: STUDENT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

// <-------- student register action  ----------->
export const studentRegister = (email, password, name, age) => async (
  dispatch
) => {
  try {
    dispatch({ type: STUDENT_REGISTER_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/students',
      { email, password, name, age },
      config
    )

    dispatch({
      type: STUDENT_REGISTER_SUCCESS,
      payload: data,
    })

    localStorage.setItem('studentInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: STUDENT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
