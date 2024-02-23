import { Stack, TextField } from '@mui/material'
import React from 'react'
import { TFullName } from '../../Types/ComponentTypes'

const FullNameBlock: React.FC<TFullName> = ({ userInfo, handleInputChange }) => {
  return (
    <Stack justifyContent={'space-between'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <TextField
        name="name"
        label="Name"
        value={userInfo.name}
        onChange={handleInputChange}
        required={true}
      />
      <TextField
        name="surname"
        label="Surname"
        value={userInfo.surname}
        onChange={handleInputChange}
        required={true}
      />
      <TextField
        name="middleName"
        label="Middle name"
        onChange={handleInputChange}
        value={userInfo.middleName}
      />
    </Stack>
  )
}

export default FullNameBlock
