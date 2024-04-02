import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  InitialStateDataUser,
  TFitness,
  TFood,
  THobby,
  TMeditation,
  TMood,
  TSleeps,
  TWater
} from '../../Types/DataUserTypes'

const initialState: InitialStateDataUser = {
  userFood: [],
  userWater: [],
  userFitness: [],
  userMood: [],
  userSleeps: [],
  userMeditation: [],
  userHobby: []
}

const dataUserSlice = createSlice({
  name: 'dataUserSlice',
  initialState,
  reducers: {
    addUserFood: (state, action: PayloadAction<TFood>) => {
      state.userFood.push(action.payload)
    },
    addUserWater: (state, action: PayloadAction<TWater>) => {
      state.userWater.push(action.payload)
    },
    addUserFitness: (state, action: PayloadAction<TFitness>) => {
      state.userFitness.push(action.payload)
    },
    addUserMood: (state, action: PayloadAction<TMood>) => {
      state.userMood.push(action.payload)
    },
    addUserSleeps: (state, action: PayloadAction<TSleeps>) => {
      state.userSleeps.push(action.payload)
    },
    addUserMeditation: (state, action: PayloadAction<TMeditation>) => {
      state.userMeditation.push(action.payload)
    },
    addUserHobby: (state, action: PayloadAction<THobby>) => {
      state.userHobby.push(action.payload)
    },
    resetAll: (state) => {
      state.userFood = []
      state.userWater = []
      state.userFitness = []
      state.userMood = []
      state.userSleeps = []
      state.userMeditation = []
      state.userHobby = []
    }
  }
})

export const {
  addUserFood,
  addUserWater,
  addUserFitness,
  addUserMood,
  addUserSleeps,
  addUserMeditation,
  addUserHobby,
  resetAll
} = dataUserSlice.actions
export default dataUserSlice.reducer
