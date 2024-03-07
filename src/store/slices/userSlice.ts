import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from '../../Types/UserTypes'
import { Gender } from '../../shared/enums'

const initialState: UserInfo = {
  name: '',
  surname: '',
  middleName: '',
  age: 0,
  gender: Gender.DEFAULT,
  activity: '',
  goal: '',
  height: 0,
  weight: 0,
  notices: false
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        middleName: action.payload.middleName,
        age: action.payload.age,
        gender: action.payload.gender,
        activity: action.payload.activity,
        goal: action.payload.goal,
        height: action.payload.height,
        weight: action.payload.weight,
        notices: action.payload.notices
      }
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
