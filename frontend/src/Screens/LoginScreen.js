import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { studentLogin } from '../Actions/studentsAction'
import { useSelector, useDispatch } from 'react-redux'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  //   const studentLogin = useSelector((state) => state.studentLogin)
  //   const { loading, error, studentInfo } = studentLogin

  //   useEffect({}, [])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(studentLogin(email, password))
  }

  return (
    <div className='main-wrapper login-body'>
      <div className='login-wrapper'>
        <div className='container'>
          <div className='loginbox'>
            <div className='login-left'>
              <img
                className='img-fluid'
                src='assets/img/logo-white.png'
                alt='Logo'
              />
            </div>
            <div className='login-right'>
              <div className='login-right-wrap'>
                <h1>Login</h1>
                <p className='account-subtitle'>Access to our dashboard</p>

                {/* <!-- Form --> */}
                <form action='index.html'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='email'
                      placeholder='Email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className='form-group'>
                    <button
                      className='btn btn-primary btn-block'
                      type='submit'
                      onClick={(e) => submitHandler(e)}
                    >
                      Login
                    </button>
                  </div>
                </form>
                {/* <!-- /Form --> */}

                <div className='text-center forgotpass'>
                  <Link to=''>Forgot Password?</Link>
                </div>
                <div className='login-or'>
                  <span className='or-line'></span>
                  <span className='span-or'>or</span>
                </div>

                {/* <!-- Social Login --> */}
                <div className='social-login'>
                  <span>Login with</span>
                  <Link to='#' className='facebook'>
                    <i className='fab fa-facebook-f'></i>
                  </Link>
                  <Link to='#' className='google'>
                    <i className='fab fa-google'></i>
                  </Link>
                </div>
                {/* <!-- /Social Login --> */}

                <div className='text-center dont-have'>
                  Don’t have an account? <Link to='/register'>Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
