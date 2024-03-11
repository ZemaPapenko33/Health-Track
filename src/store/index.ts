import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'

export const rootReducer = combineReducers({ userSlice })

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer
})
