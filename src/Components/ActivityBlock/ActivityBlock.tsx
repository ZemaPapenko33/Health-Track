import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import { TActivity } from '../../Types/ComponentTypes'

const ActivityBlock: React.FC<TActivity> = ({ userInfo, handleSelectChange }) => {
  return (
    <Stack justifyContent={'space-evenly'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <FormControl>
        <InputLabel id="select-activity">Activity</InputLabel>
        <Select
          name="activity"
          value={userInfo.activity}
          onChange={handleSelectChange}
          labelId="select-activity"
          label="Activity"
        >
          <MenuItem value={'Often'}>Often</MenuItem>
          <MenuItem value={'Average'}>Average</MenuItem>
          <MenuItem value={'Rarely'}>Rarely</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default ActivityBlock
