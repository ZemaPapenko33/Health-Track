import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import dataUserSlice from './slices/dataUserSlice'

export const rootReducer = combineReducers({ userSlice, dataUserSlice })

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer
})
