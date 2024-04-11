import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStateDataUser, TOperation } from '../../Types/DataUserTypes'
import { OperationType } from '../../shared/enums'

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
    operationData: (state, action: PayloadAction<TOperation>) => {
      const { type, operation, id, newValue } = action.payload
      switch (operation) {
        case OperationType.ADD: {
          state[type].push(newValue)
          break
        }
        case OperationType.UPDATE: {
          const indexToUpdate = state[type].findIndex((item) => item.id === id)
          if (indexToUpdate !== -1) {
            state[type][indexToUpdate] = newValue
          }
          break
        }
        case OperationType.REMOVE: {
          const indexToRemove = state[type].findIndex((item) => item.id === id)
          if (indexToRemove !== -1) {
            state[type].splice(indexToRemove, 1)
          }
          break
        }
        default:
          break
      }
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

export const { operationData, resetAll } = dataUserSlice.actions
export default dataUserSlice.reducer
