import { React, useState, useEffect } from 'react'
import Header from '../Componenets/Header'
import Sidebar from '../Componenets/Sidebar'
import { useSelector, useDispatch } from 'react-redux'

const HomeScreen = ({ history }) => {
  const studentLoginInfo = useSelector((state) => state.studentLogin)
  const { loading, error, studentInfo } = studentLoginInfo

  useEffect(() => {
    if (!studentInfo) {
      history.push('/')
    }
  }, [studentInfo, history])

  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

export default HomeScreen
