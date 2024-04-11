import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStateDataUser, TOperation, DataTypeMapper } from '../../Types/DataUserTypes'
import { OperationType as OpType } from '../../shared/enums'

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

      type NewValueType = DataTypeMapper[typeof type]

      switch (operation) {
        case OpType.ADD: {
          ;(state[type] as NewValueType[]).push(newValue)
          break
        }
        case OpType.UPDATE: {
          const indexToUpdate = (state[type] as NewValueType[]).findIndex((item) => item.id === id)
          if (indexToUpdate !== -1) {
            ;(state[type] as NewValueType[])[indexToUpdate] = newValue
          }
          break
        }
        case OpType.REMOVE: {
          const indexToRemove = (state[type] as NewValueType[]).findIndex((item) => item.id === id)
          if (indexToRemove !== -1) {
            ;(state[type] as NewValueType[]).splice(indexToRemove, 1)
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
