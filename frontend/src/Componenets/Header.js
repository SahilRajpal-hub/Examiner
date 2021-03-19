import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout } from '../Actions/studentsAction'

const Header = () => {
  const dispatch = useDispatch()
  const submitHandler = () => {
    dispatch(studentLogout())
  }

  return (
    // <!-- Header -->
    <div className='header'>
      {/* <!-- Logo --> */}
      <div className='header-left'>
        <Link to='/home' className='logo'>
          <img src='assets/img/logo.png' alt='Logo' />
        </Link>
        <Link className='logo logo-small'>
          <img
            src='assets/img/logo-small.png'
            alt='Logo'
            width='30'
            height='30'
          />
        </Link>
      </div>
      {/* <!-- /Logo --> */}

      <Link id='toggle_btn'>
        <i className='fas fa-align-left'></i>
      </Link>

      {/* <!-- Search Bar --> */}
      <div className='top-nav-search'>
        <form>
          <input
            type='text'
            className='form-control'
            placeholder='Search here'
          />
          <button className='btn' type='submit'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
      {/* <!-- /Search Bar --> */}

      {/* <!-- Mobile Menu Toggle --> */}
      <Link to='' className='mobile_btn'>
        <i className='fas fa-bars'></i>
      </Link>
      {/* <!-- /Mobile Menu Toggle --> */}

      {/* <!-- Header Right Menu --> */}
      <ul className='nav user-menu'>
        {/* <!-- Notifications --> */}
        <li className='nav-item dropdown noti-dropdown'>
          <Link
            to='#'
            className='dropdown-toggle nav-link'
            data-toggle='dropdown'
          >
            <i className='far fa-bell'></i>{' '}
            <span className='badge badge-pill'>3</span>
          </Link>
          <div className='dropdown-menu notifications'>
            <div className='topnav-dropdown-header'>
              <span className='notification-title'>Notifications</span>
              <Link to='' className='clear-noti'>
                {' '}
                Clear All{' '}
              </Link>
            </div>
            <div className='noti-content'>
              <ul className='notification-list'>
                <li className='notification-message'>
                  <Link to='#'>
                    <div className='media'>
                      <span className='avatar avatar-sm'>
                        <img
                          className='avatar-img rounded-circle'
                          alt='User'
                          src='assets/img/profiles/avatar-02.jpg'
                        />
                      </span>
                      <div className='media-body'>
                        <p className='noti-details'>
                          <span className='noti-title'>Carlson Tech</span> has
                          approved{' '}
                          <span className='noti-title'>your estimate</span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className='notification-message'>
                  <Link to='#'>
                    <div className='media'>
                      <span className='avatar avatar-sm'>
                        <img
                          className='avatar-img rounded-circle'
                          alt='User'
                          src='assets/img/profiles/avatar-11.jpg'
                        />
                      </span>
                      <div className='media-body'>
                        <p className='noti-details'>
                          <span className='noti-title'>
                            International Software Inc
                          </span>{' '}
                          has sent you a invoice in the amount of{' '}
                          <span className='noti-title'>$218</span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className='notification-message'>
                  <Link to='#'>
                    <div className='media'>
                      <span className='avatar avatar-sm'>
                        <img
                          className='avatar-img rounded-circle'
                          alt='User'
                          src='assets/img/profiles/avatar-17.jpg'
                        />
                      </span>
                      <div className='media-body'>
                        <p className='noti-details'>
                          <span className='noti-title'>John Hendry</span> sent a
                          cancellation request{' '}
                          <span className='noti-title'>Apple iPhone XR</span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className='notification-message'>
                  <Link to='#'>
                    <div className='media'>
                      <span className='avatar avatar-sm'>
                        <img
                          className='avatar-img rounded-circle'
                          alt='User'
                          src='assets/img/profiles/avatar-13.jpg'
                        />
                      </span>
                      <div className='media-body'>
                        <p className='noti-details'>
                          <span className='noti-title'>
                            Mercury Software Inc
                          </span>{' '}
                          added a new product{' '}
                          <span className='noti-title'>Apple MacBook Pro</span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='topnav-dropdown-footer'>
              <Link to='#'>View all Notifications</Link>
            </div>
          </div>
        </li>
        {/* <!-- /Notifications --> */}

        {/* <!-- User Menu --> */}
        <li className='nav-item dropdown has-arrow'>
          <Link
            to='#'
            className='dropdown-toggle nav-link'
            data-toggle='dropdown'
          >
            <span className='user-img'>
              <img
                className='rounded-circle'
                src='assets/img/profiles/avatar-01.jpg'
                width='31'
                alt='Ryan Taylor'
              />
            </span>
          </Link>
          <div className='dropdown-menu'>
            <div className='user-header'>
              <div className='avatar avatar-sm'>
                <img
                  src='assets/img/profiles/avatar-01.jpg'
                  alt='User'
                  className='avatar-img rounded-circle'
                />
              </div>
              <div className='user-text'>
                <h6>Ryan Taylor</h6>
                <p className='text-muted mb-0'>Administrator</p>
              </div>
            </div>
            <Link className='dropdown-item' to=''>
              My Profile
            </Link>
            <Link className='dropdown-item' to=''>
              Inbox
            </Link>
            <Link className='dropdown-item' onClick={(e) => submitHandler()}>
              Logout
            </Link>
          </div>
        </li>
        {/* <!-- /User Menu --> */}
      </ul>
      {/* <!-- /Header Right Menu --> */}
    </div>
  )
}

export default Header
