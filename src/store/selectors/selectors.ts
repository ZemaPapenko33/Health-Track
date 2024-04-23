import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectUser = (state: RootState) => state.userSlice
const getUserFood = (state: RootState) => state.dataUserSlice.userFood
export const getFoodByCategory = createSelector(
  [getUserFood, (_, category) => category],
  (userFood, category) => {
    return userFood.filter((food) => food.categoryFood === category)
  }
)
