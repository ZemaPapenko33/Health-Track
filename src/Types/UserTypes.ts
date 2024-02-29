import { Gender } from '../shared/enums'

export type UserInfo = {
  name: string
  surname: string
  middleName: string
  age: number
  gender: Gender
  activity: string
  goal: string
  notices: boolean
  height: number
  weight: number
}
