import { takeEvery } from 'redux-saga/effects'

function* mySaga() {
  yield takeEvery('*', () => {
    console.log('take')
  })
}

export default mySaga
