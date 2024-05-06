import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectUser = (state: RootState) => state.userSlice
export const getUserFood = (state: RootState) => state.dataUserSlice.userFood
export const getFoodByCategory = createSelector(
  [getUserFood, (_, category) => category, (_, __, date) => date],
  (userFood, category, date) => {
    return userFood.filter((food) => food.categoryFood === category && food.date === date)
  }
)
