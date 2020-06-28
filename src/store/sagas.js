import { takeEvery, call } from 'redux-saga/effects'
import API from '../api'
import { USER_GET } from '../constants'

function* fetchUsers() {
  const users = yield call(API.get)

  console.log(users)
}

function* mySaga() {
  yield takeEvery('*', fetchUsers)
}

export default mySaga
