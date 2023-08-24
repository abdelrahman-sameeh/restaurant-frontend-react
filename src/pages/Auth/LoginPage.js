import React from 'react'
import LoginContainer from '../../components/Auth/LoginContainer'
import CurrentLocation from '../../components/Utility/CurrentLocation'

const LoginPage = () => {
  return (
    <div className='container'>
      <CurrentLocation current={'تسجيل الدخول'} />
      <LoginContainer />
    </div>
  )
}

export default LoginPage