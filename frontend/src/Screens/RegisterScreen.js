import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentRegister } from '../Actions/studentsAction'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (password === confirmPassword)
      dispatch(studentRegister(email, password, name, age))
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
                <h1>Register</h1>
                <p className='account-subtitle'>Access to our dashboard</p>

                {/* <!-- Form --> */}
                <form action='index.html'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='name'
                      placeholder='Name'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                      type='number'
                      placeholder='Age'
                      onChange={(e) => setAge(e.target.value)}
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
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Confirm Password'
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className='form-group'>
                    <button
                      className='btn btn-primary btn-block'
                      type='submit'
                      onChange={(e) => submitHandler(e)}
                    >
                      Register
                    </button>
                  </div>
                </form>
                {/* <!-- /Form --> */}

                <div className='login-or'>
                  <span className='or-line'></span>
                  <span className='span-or'>or</span>
                </div>

                {/* <!-- Social Login --> */}
                <div className='social-login'>
                  <span>Register with</span>
                  <Link to='#' className='facebook'>
                    <i className='fab fa-facebook-f'></i>
                  </Link>
                  <Link to='#' className='google'>
                    <i className='fab fa-google'></i>
                  </Link>
                </div>
                {/* <!-- /Social Login --> */}

                <div className='text-center dont-have'>
                  Already have an account? <Link to='/login'>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
