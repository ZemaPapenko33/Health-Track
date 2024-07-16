import { Button } from '@mui/material'
import React from 'react'
import { TButtonYear } from '../../Types/ComponentTypes'

const ButtonYear: React.FC<TButtonYear> = ({ onClickHandler, icon }) => {
  return <Button onClick={onClickHandler}>{icon}</Button>
}

export default ButtonYear
