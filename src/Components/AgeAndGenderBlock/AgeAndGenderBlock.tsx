import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React from 'react'
import { TAgeAndGender } from '../../Types/ComponentTypes'
import { t } from 'i18next'
import { Gender } from '../../shared/enums'

const AgeAndGenderBlock: React.FC<TAgeAndGender> = ({
  userInfo,
  handleSelectChange,
  handleInputChange,
  handleKeyDown,
  ageValue
}) => {
  return (
    <Stack justifyContent={'space-evenly'} marginBottom={'2rem'} height={'35%'} width={'30%'}>
      <TextField
        name="age"
        label={t('t-age')}
        value={ageValue}
        onChange={handleInputChange}
        required
        onKeyDown={handleKeyDown}
      />
      <FormControl>
        <InputLabel id="select-gender" required>
          {t('t-gender')}
        </InputLabel>
        <Select
          labelId="select-gender"
          value={userInfo.gender}
          onChange={handleSelectChange}
          label={t('t-gender')}
          name="gender"
        >
          <MenuItem value={t(Gender.MALE)}>{t('t-male')}</MenuItem>
          <MenuItem value={t(Gender.FEMALE)}>{t('t-female')}</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default AgeAndGenderBlock
