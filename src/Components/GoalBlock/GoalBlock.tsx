import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import { TGoal } from '../../Types/ComponentTypes'
import { t } from 'i18next'

const GoalBlock: React.FC<TGoal> = ({ userInfo, handleSelectChange }) => {
  return (
    <Stack justifyContent={'space-evenly'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <FormControl>
        <InputLabel id="select-goal">{t('t-goal')}</InputLabel>
        <Select
          name="goal"
          value={userInfo.goal}
          onChange={handleSelectChange}
          label={t('t-goal')}
          labelId="select-goal"
        >
          <MenuItem value={t('t-lose-weight')}>{t('t-lose-weight')}</MenuItem>
          <MenuItem value={t('gain-mass')}>{t('t-gain-mass')}</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default GoalBlock
