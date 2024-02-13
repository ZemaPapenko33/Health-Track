import React, { createContext, useContext, useState, ReactNode } from 'react'

type TContext = {
  email: string
  password: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type ProviderProps = {
  children: ReactNode
}

const AppContext = createContext<TContext | undefined>(undefined)

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        emailInputHandler,
        passwordInputHandler
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
