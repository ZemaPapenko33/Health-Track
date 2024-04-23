import { DataType, OperationType } from '../shared/enums'

export type TFood = {
  id: string
  calories: number
  nameFood: string
  categoryFood: string
}

export type TWater = {
  id: number | string
  ml: number
  time: string
}

export type TFitness = {
  id: number | string
  calories: number
  level: string
  nameProgram: string
  time: string
}

export type TMood = {
  id: number | string
  data: string
  moodUser: string
}

export type TSleeps = {
  id: number | string
  bedTime: string
  wakeUpTime: string
  totalSleepTime: string
  data: string
}

export type TMeditation = {
  id: number | string
  nameProgram: string
  time: string
}

export type THobby = {
  id: number | string
  dataStart: string
  dataEnd: string
  nameHobby: string
}

export type InitialStateDataUser = {
  userFood: Array<TFood>
  userWater: Array<TWater>
  userFitness: Array<TFitness>
  userMood: Array<TMood>
  userSleeps: Array<TSleeps>
  userMeditation: Array<TMeditation>
  userHobby: Array<THobby>
}

export type DataTypeMapper = {
  [DataType.Food]: TFood
  [DataType.Water]: TWater
  [DataType.Fitness]: TFitness
  [DataType.Mood]: TMood
  [DataType.Sleeps]: TSleeps
  [DataType.Meditation]: TMeditation
  [DataType.Hobby]: THobby
}

export type TOperation = {
  type: DataType
  operation: OperationType
  id?: number | string
  newValue?: DataTypeMapper[DataType]
}
