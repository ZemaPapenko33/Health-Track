import React, { createContext, useContext, useState, ReactNode } from 'react'
import dayjs, { Dayjs } from 'dayjs'

type TContext = {
  email: string
  password: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleDateChange: (date: Dayjs) => void
  selectedDate: string
}

type ProviderProps = {
  children: ReactNode
}

const AppContext = createContext<TContext | undefined>(undefined)

export const BasicProvider: React.FC<ProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState(dayjs().format('DD.MM.YYYY'))

  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleDateChange = (date: Dayjs) => {
    setSelectedDate(date.format('DD.MM.YYYY'))
  }

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        selectedDate,
        setEmail,
        setPassword,
        emailInputHandler,
        passwordInputHandler,
        handleDateChange
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): TContext => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useForm must be used within a UseProvider')
  }

  return context
}
