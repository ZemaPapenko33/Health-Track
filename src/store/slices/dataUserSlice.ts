import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  TAllCaloriesToday,
  TAllWaterToday,
  TFitness,
  TMood,
  TSleeps,
  TWater
} from '../../Types/DataUserTypes'

const initialState = {
  userWater: [] as Array<TWater>,
  userAllCalories: [] as Array<TAllCaloriesToday>,
  userAllWater: [] as Array<TAllWaterToday>,
  userSleeps: [] as Array<TSleeps>,
  userMood: [] as Array<TMood>,
  userFitness: [] as Array<TFitness>
}

const dataUserSlice = createSlice({
  name: 'dataUserSlice',
  initialState,
  reducers: {}
})

export default dataUserSlice.reducer
