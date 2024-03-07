import { SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import { UserInfo } from '../Types/UserTypes'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { Gender, PageRoutes } from '../shared/enums'
import { t } from 'i18next'

type ProfilePageHook = {
  activeStep: number
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
  userInfo: UserInfo
  steps: Array<string>
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>
  handleNext: VoidFunction
  handleBack: VoidFunction
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (event: SelectChangeEvent<string>) => void
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (event: React.KeyboardEvent) => void
  handleFinish: () => Promise<void>
  buttonText: string
  buttonAction: VoidFunction
  ageValue: number | string
  heightValue: number | string
  weightValue: number | string
  isStepValid: { [key: number]: boolean }
}

function useProfilePage(): ProfilePageHook {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [userInfo, setUserInfo] = useState({
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
  })
  const isStepValid = {
    0: userInfo.name !== '' && userInfo.surname !== '',
    1: userInfo.age !== 0 && userInfo.gender !== Gender.DEFAULT,
    2: userInfo.height !== 0 && userInfo.weight !== 0,
    3: userInfo.activity !== '',
    4: userInfo.goal !== '',
    5: true
  }
  const steps = [
    t('t-full-name'),
    t('t-gender-and-age'),
    t('t-height-and-weight'),
    t('t-physical-activity'),
    t('t-purpose-of-using-the-application'),
    t('t-notices')
  ]
  const email = localStorage.getItem('email')
  const navigate = useNavigate()
  const buttonText = activeStep !== steps.length - 1 ? t('t-next') : t('t-finish')
  const ageValue = userInfo.age === 0 ? '' : userInfo.age
  const heightValue = userInfo.height === 0 ? '' : userInfo.height
  const weightValue = userInfo.weight === 0 ? '' : userInfo.weight

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
  }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value as string })
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.checked })
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const keyValue = event.key
    if ((/\D/.test(keyValue) || keyValue === '-' || keyValue === '0') && keyValue !== 'Backspace')
      event.preventDefault()
  }

  const createUser = async () => {
    await addDoc(collection(db, 'Users'), {
      name: userInfo.name,
      surname: userInfo.surname,
      middleName: userInfo.middleName,
      age: userInfo.age,
      gender: userInfo.gender,
      activity: userInfo.activity,
      goal: userInfo.goal,
      height: userInfo.height,
      weight: userInfo.weight,
      notices: userInfo.notices,
      email: email
    })
  }

  const handleFinish = async () => {
    createUser()
    localStorage.removeItem('registration')
    localStorage.setItem('userAuth', 'true')
    navigate(PageRoutes.HOME_ROUTE)
  }

  const buttonAction = activeStep !== steps.length - 1 ? handleNext : handleFinish

  return {
    activeStep,
    userInfo,
    steps,
    buttonText,
    ageValue,
    heightValue,
    weightValue,
    isStepValid,
    setActiveStep,
    setUserInfo,
    handleNext,
    handleBack,
    handleInputChange,
    handleSelectChange,
    handleCheckboxChange,
    handleFinish,
    buttonAction,
    handleKeyDown
  }
}

export default useProfilePage
