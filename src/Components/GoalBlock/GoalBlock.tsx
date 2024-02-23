import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import { TGoal } from '../../Types/ComponentTypes'

const GoalBlock: React.FC<TGoal> = ({ userInfo, handleSelectChange }) => {
  return (
    <Stack justifyContent={'space-evenly'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <FormControl>
        <InputLabel id="select-goal">Goal</InputLabel>
        <Select
          name="goal"
          value={userInfo.goal}
          onChange={handleSelectChange}
          label="Goal"
          labelId="select-goal"
        >
          <MenuItem value={'Lose weight'}>Lose weight</MenuItem>
          <MenuItem value={'Gain mass'}>Gain mass</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default GoalBlock
