import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { t } from 'i18next'
import React from 'react'

const AddFoodForm = () => {
  return (
    <Stack width={'30%'} borderLeft={0.25} padding={'0.25rem'}>
      <TextField label="Name food" variant="standard" type="text" />
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Тип приема пищи</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Age"
        >
          <MenuItem value={t('t-breakfast')}>{t('t-breakfast')}</MenuItem>
          <MenuItem value={t('t-lunch')}>{t('t-lunch')}</MenuItem>
          <MenuItem value={t('t-dinner')}>{t('t-dinner')}</MenuItem>
          <MenuItem value={t('t-additional-meal')}>{t('t-additional-meal')}</MenuItem>
        </Select>
      </FormControl>
      <Stack
        flexDirection={'row'}
        padding={'0.25rem'}
        justifyContent={'space-between'}
        width={'37%'}
      >
        <Button variant="contained">{t('t-add')}</Button>
        <Button variant="outlined">{t('t-clear')}</Button>
      </Stack>
      <Stack width={'10%'}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar views={['day']} />
        </LocalizationProvider>
      </Stack>
    </Stack>
  )
}

export default AddFoodForm
