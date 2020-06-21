import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'

export const LoginForm = props => {
  const { loginAction } = props

  return (
    <Form
      onSubmit={loginAction}
      validate={() => { }}
      render={({ handleSubmit }) => <form onSubmit={handleSubmit}>
        <div>
          <Field name="login" component="input" type="text" placeholder="login" />
        </div>
        <div>
          <Field name="password" component="input" type="password" placeholder="password" />
        </div>
        <button type="submit" disabled={!handleSubmit}>Submit</button>
      </form>}
    />
  )
}

LoginForm.propTypes = {
  loginAction: PropTypes.func
}
