import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React from 'react'
import { TAgeAndGender } from '../../Types/ComponentTypes'

const AgeAndGenderBlock: React.FC<TAgeAndGender> = ({
  userInfo,
  handleSelectChange,
  handleInputChange
}) => {
  return (
    <Stack justifyContent={'space-evenly'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <TextField
        name="age"
        label="Age"
        value={userInfo.age}
        onChange={handleInputChange}
        required
      />
      <FormControl>
        <InputLabel id="select-gender" required>
          Gender
        </InputLabel>
        <Select
          labelId="select-gender"
          value={userInfo.gender}
          onChange={handleSelectChange}
          label="Gender"
          name="gender"
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default AgeAndGenderBlock
