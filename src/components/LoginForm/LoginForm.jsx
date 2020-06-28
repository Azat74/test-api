import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { login as loginAction } from '../../store/auth'

export const LoginForm = () => {
  const dispatch = useDispatch()

  return (
    <Form
      onSubmit={e => dispatch(loginAction(e))}
      validate={() => { }}
      render={({ handleSubmit }) => <form onSubmit={handleSubmit}>
        <div>
          <Field name="login" component="input" type="text" placeholder="login" defaultValue="eve.holt@reqres.in" />
        </div>
        <div>
          <Field name="password" component="input" type="password" placeholder="password" defaultValue="pistol" />
        </div>
        <button type="submit" disabled={!handleSubmit}>Submit</button>
      </form>}
    />
  )
}

LoginForm.propTypes = {
  loginAction: PropTypes.func
}
