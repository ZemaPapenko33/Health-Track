import { Stack, TextField } from '@mui/material'
import React from 'react'
import { TFullName } from '../../Types/ComponentTypes'
import { t } from 'i18next'

const FullNameBlock: React.FC<TFullName> = ({ userInfo, handleInputChange }) => {
  return (
    <Stack justifyContent={'space-between'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <TextField
        name="name"
        label={t('t-name')}
        value={userInfo.name}
        onChange={handleInputChange}
        required={true}
      />
      <TextField
        name="surname"
        label={t('t-surname')}
        value={userInfo.surname}
        onChange={handleInputChange}
        required={true}
      />
      <TextField
        name="middleName"
        label={t('t-middle-name')}
        onChange={handleInputChange}
        value={userInfo.middleName}
      />
    </Stack>
  )
}

export default FullNameBlock
