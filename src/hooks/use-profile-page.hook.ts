import { SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import { UserInfo } from '../Types/UserTypes'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'

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
  handleFinish: () => Promise<void>
}

function useProfilePage(): ProfilePageHook {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [userInfo, setUserInfo] = useState({
    name: '',
    surname: '',
    middleName: '',
    age: '',
    gender: '',
    activity: '',
    goal: '',
    notices: false
  })
  const steps = [
    'Full name',
    'Gender and age',
    'Physical activity',
    'Purpose of using the application',
    'notices'
  ]
  const email = localStorage.getItem('email')
  const navigate = useNavigate()

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

  const handleFinish = async () => {
    await addDoc(collection(db, 'Users'), {
      name: userInfo.name,
      surname: userInfo.surname,
      middleName: userInfo.middleName,
      age: userInfo.age,
      gender: userInfo.gender,
      activity: userInfo.activity,
      goal: userInfo.goal,
      notice: userInfo.notices,
      email: email
    })
    localStorage.removeItem('registration')
    localStorage.setItem('userAuth', 'true')
    navigate(PageRoutes.HOME_ROUTE)
  }

  return {
    activeStep,
    userInfo,
    steps,
    setActiveStep,
    setUserInfo,
    handleNext,
    handleBack,
    handleInputChange,
    handleSelectChange,
    handleCheckboxChange,
    handleFinish
  }
}

export default useProfilePage
