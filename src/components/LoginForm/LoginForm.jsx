import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { login as loginAction, selectError } from '../../store/auth'

export const LoginForm = () => {
  const dispatch = useDispatch()
  const errorText = useSelector(selectError)

  return (
    <Form
      onSubmit={e => dispatch(loginAction(e))}
      render={({ handleSubmit }) => <form onSubmit={handleSubmit}>
        <div>
          <Field name="login" component="input" type="text" placeholder="login" defaultValue="eve.holt@reqres.in" />
        </div>
        <div>
          <Field name="password" component="input" type="password" placeholder="password" defaultValue="pistol" />
        </div>
        {errorText && <div>{errorText}</div>}
        <button type="submit" disabled={!handleSubmit}>Submit</button>
      </form>}
    />
  )
}

LoginForm.propTypes = {
  loginAction: PropTypes.func
}
