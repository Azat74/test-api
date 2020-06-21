import React from 'react'
import PropTypes from 'prop-types'
import { LoginForm } from '../../components/LoginForm'

export const LoginPage = props => {
  const { loginAction } = props

  return (
    <div className="loginPage"><LoginForm loginAction={loginAction} /></div>
  )
}

LoginPage.propTypes = {
  loginAction: PropTypes.func.isRequired
}
