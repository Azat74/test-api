import { all, takeEvery, put, getContext } from 'redux-saga/effects'
import { login as loginAction, setLogin } from './index'

function* handleLogin(action) {
  const axios = yield getContext('axios')

  console.log(action)
  const { login, password } = action.payload

  try {
    const response = yield axios.post('/register/', {
      email: login,
      password: password,
    })
    const { id, token } = response.data

    yield put(setLogin({id, token}))
  } catch (e) {
    console.log(e)
  }
}

export default function*() {
  return yield all([
    takeEvery(loginAction, handleLogin)
  ])
}
