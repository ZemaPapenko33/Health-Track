import { Checkbox, FormControlLabel, Stack } from '@mui/material'
import React from 'react'
import { TNotice } from '../../Types/ComponentTypes'

const NoticeBlock: React.FC<TNotice> = ({ handleCheckboxChange }) => {
  return (
    <Stack justifyContent={'center'} marginBottom={'2rem'} height={'35%'}>
      <FormControlLabel
        control={<Checkbox onChange={handleCheckboxChange} />}
        label="Would you like to be notified when you take your medications or blood pressure measurements?"
        name="notices"
      />
    </Stack>
  )
}

export default NoticeBlock
