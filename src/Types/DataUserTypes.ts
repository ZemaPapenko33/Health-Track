export type TFood = {
  calories: number
  nameFood: string
}

export type TWater = {
  ml: number
  time: string
}

export type TFitness = {
  calories: number
  level: string
  nameProgram: string
  time: string
}

export type TMood = {
  data: string
  moodUser: string
}

export type TSleeps = {
  bedTime: string
  wakeUpTime: string
  totalSleepTime: string
  data: string
}

export type TMeditation = {
  nameProgram: string
  time: string
}

export type THobby = {
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
