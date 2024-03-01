import { Checkbox, FormControlLabel, Stack } from '@mui/material'
import React from 'react'
import { TNotice } from '../../Types/ComponentTypes'
import { t } from 'i18next'

const NoticeBlock: React.FC<TNotice> = ({ handleCheckboxChange }) => {
  return (
    <Stack justifyContent={'center'} marginBottom={'2rem'} height={'35%'}>
      <FormControlLabel
        control={<Checkbox onChange={handleCheckboxChange} />}
        label={t('t-notice-message')}
        name="notices"
      />
    </Stack>
  )
}

export default NoticeBlock
