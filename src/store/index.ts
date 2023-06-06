import { configureStore } from '@reduxjs/toolkit'

import userReducer from './features/user'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    user: userReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
