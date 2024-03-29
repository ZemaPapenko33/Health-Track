import { FormEvent } from 'react'
import { TErrorMessage } from './ErrorTypes'
import { UserInfo } from './UserTypes'
import { SelectChangeEvent } from '@mui/material'
import { TSidebarItemObject } from './ObjectTypes'

export type TEmailInput = {
  emailError: boolean
  emailInputHelperText: string
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type IFormForRegAndAuth = {
  keyText: string
  showPassword: boolean
  passwordInputType: string
  errorMessage: TErrorMessage
  formHandler: (event: FormEvent) => Promise<void>
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordHandler: VoidFunction
}

export type TPasswordInput = {
  passwordError: boolean
  showPassword: boolean
  passwordInputHelperText: string
  passwordInputType: string
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordHandler: VoidFunction
}

export type TPendingForm = {
  backButtonHandler: VoidFunction
}

export type TVisibilityPassword = {
  showPassword: boolean
  showPasswordHandler: VoidFunction
}

export type TFullName = {
  userInfo: UserInfo
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type TAgeAndGender = {
  userInfo: UserInfo
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (event: SelectChangeEvent<string>) => void
  ageValue: number | string
  handleKeyDown: (event: React.KeyboardEvent) => void
}

export type TActivity = {
  userInfo: UserInfo
  handleSelectChange: (event: SelectChangeEvent<string>) => void
}
export type TGoal = {
  userInfo: UserInfo
  handleSelectChange: (event: SelectChangeEvent<string>) => void
}

export type TNotice = {
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type StepSwitchProps = {
  children: Array<JSX.Element>
  step: number
}

export type IconSwitchProps = {
  children: Array<JSX.Element>
  text: string
}

export type TContentSwitchProps = {
  children: Array<JSX.Element>
  selectedMenu: string
}

export type TStepSwitch = {
  userInfo: UserInfo
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (event: SelectChangeEvent<string>) => void
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (event: React.KeyboardEvent) => void
  step: number
  ageValue: number | string
  heightValue: number | string
  weightValue: number | string
}

export type THAWBlock = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (event: React.KeyboardEvent) => void
  heightValue: number | string
  weightValue: number | string
}

export type THeader = {
  avatarText: string
  handleClose: VoidFunction
  open: boolean
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  anchorEl: HTMLElement | null
  logOut: VoidFunction
}

export type TSidebar = {
  sidebarItems: Array<TSidebarItemObject>
  selectedMenu: string
  sidebarItemClick: (index: number) => void
}

export type TIcons = {
  text: string
}

export type TContentHomePage = {
  selectedMenu: string
  userBMI: number
  percentUserBMI: number
}

export type TProfile = {
  userBMI: number
  percentUserBMI: number
}

export type TBMIData = {
  message: string
  color: string
}

export type TBMI = {
  userBMI: number
  percentUserBMI: number
}
