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
    removeUserFood: (state, action: PayloadAction<number>) => {
      state.userFood.splice(action.payload, 1)
    },
    updateUserFood: (state, action: PayloadAction<{ index: number; newValue: TFood }>) => {
      const { index, newValue } = action.payload
      state.userFood[index] = newValue
    },
    addUserWater: (state, action: PayloadAction<TWater>) => {
      state.userWater.push(action.payload)
    },
    removeUserWater: (state, action: PayloadAction<number>) => {
      state.userWater.splice(action.payload, 1)
    },
    updateUserWater: (state, action: PayloadAction<{ index: number; newValue: TWater }>) => {
      const { index, newValue } = action.payload
      state.userWater[index] = newValue
    },
    addUserFitness: (state, action: PayloadAction<TFitness>) => {
      state.userFitness.push(action.payload)
    },
    removeUserFitness: (state, action: PayloadAction<number>) => {
      state.userFitness.splice(action.payload, 1)
    },
    updateUserFitness: (state, action: PayloadAction<{ index: number; newValue: TFitness }>) => {
      const { index, newValue } = action.payload
      state.userFitness[index] = newValue
    },
    addUserMood: (state, action: PayloadAction<TMood>) => {
      state.userMood.push(action.payload)
    },
    removeUserMood: (state, action: PayloadAction<number>) => {
      state.userMood.splice(action.payload, 1)
    },
    updateUserMood: (state, action: PayloadAction<{ index: number; newValue: TMood }>) => {
      const { index, newValue } = action.payload
      state.userMood[index] = newValue
    },
    addUserSleeps: (state, action: PayloadAction<TSleeps>) => {
      state.userSleeps.push(action.payload)
    },
    removeUserSleeps: (state, action: PayloadAction<number>) => {
      state.userSleeps.splice(action.payload, 1)
    },
    updateUserSleeps: (state, action: PayloadAction<{ index: number; newValue: TSleeps }>) => {
      const { index, newValue } = action.payload
      state.userSleeps[index] = newValue
    },
    addUserMeditation: (state, action: PayloadAction<TMeditation>) => {
      state.userMeditation.push(action.payload)
    },
    removeUserMeditation: (state, action: PayloadAction<number>) => {
      state.userMeditation.splice(action.payload, 1)
    },
    updateUserMeditation: (
      state,
      action: PayloadAction<{ index: number; newValue: TMeditation }>
    ) => {
      const { index, newValue } = action.payload
      state.userMeditation[index] = newValue
    },
    addUserHobby: (state, action: PayloadAction<THobby>) => {
      state.userHobby.push(action.payload)
    },
    removeUserHobby: (state, action: PayloadAction<number>) => {
      state.userHobby.splice(action.payload, 1)
    },
    updateUserHobby: (state, action: PayloadAction<{ index: number; newValue: THobby }>) => {
      const { index, newValue } = action.payload
      state.userHobby[index] = newValue
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
  removeUserFood,
  removeUserWater,
  removeUserFitness,
  removeUserMood,
  removeUserSleeps,
  removeUserMeditation,
  removeUserHobby,
  updateUserFood,
  updateUserWater,
  updateUserFitness,
  updateUserMood,
  updateUserSleeps,
  updateUserMeditation,
  updateUserHobby,
  resetAll
} = dataUserSlice.actions
export default dataUserSlice.reducer
