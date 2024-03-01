import { Stack, TextField } from '@mui/material'
import { t } from 'i18next'
import React from 'react'
import { THAWBlock } from '../../Types/ComponentTypes'

const HAWBlock: React.FC<THAWBlock> = ({
  handleInputChange,
  handleKeyDown,
  heightValue,
  weightValue
}) => {
  return (
    <Stack justifyContent={'space-evenly'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <TextField
        name="height"
        label={t('t-height')}
        value={heightValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        required
      />
      <TextField
        name="weight"
        label={t('t-weight')}
        value={weightValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        required
      />
    </Stack>
  )
}

export default HAWBlock
