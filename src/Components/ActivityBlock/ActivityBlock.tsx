import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import { TActivity } from '../../Types/ComponentTypes'
import { t } from 'i18next'

const ActivityBlock: React.FC<TActivity> = ({ userInfo, handleSelectChange }) => {
  return (
    <Stack justifyContent={'space-evenly'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <FormControl>
        <InputLabel id="select-activity">{t('t-activity')}</InputLabel>
        <Select
          name="activity"
          value={userInfo.activity}
          onChange={handleSelectChange}
          labelId="select-activity"
          label={t('t-activity')}
        >
          <MenuItem value={t('t-often')}>{t('t-often')}</MenuItem>
          <MenuItem value={t('t-average')}>{t('t-average')}</MenuItem>
          <MenuItem value={t('t-rarely')}>{t('t-rarely')}</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default ActivityBlock
