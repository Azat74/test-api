import reduxLogger from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import mySaga from './sagas'

const defaultMiddleware = getDefaultMiddleware({ thunk: false })
const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    ...rootReducer
  },
  middleware: defaultMiddleware.concat([sagaMiddleware, reduxLogger]),
})

sagaMiddleware.run(mySaga)
