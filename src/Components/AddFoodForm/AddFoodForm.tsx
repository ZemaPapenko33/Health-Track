import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { t } from 'i18next'
import React from 'react'
import { TAddFoodForm } from '../../Types/ComponentTypes'
import dayjs from 'dayjs'

const AddFoodForm: React.FC<TAddFoodForm> = ({
  nameFood,
  categoryFood,
  isNotEmpty,
  onChangeCategory,
  clearHandleClick,
  todayHandleClick,
  onChangeNameFood,
  addHandleClick,
  selectedDate,
  handleDateChange
}) => {
  return (
    <Stack width={'30%'} borderLeft={0.25} padding={'0.25rem'}>
      <TextField
        label={t('t-name-food')}
        variant="standard"
        type="text"
        value={nameFood}
        onChange={onChangeNameFood}
      />
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">{t('t-type-of-meal')}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Age"
          value={categoryFood}
          onChange={onChangeCategory}
        >
          <MenuItem value={t('t-breakfast')}>{t('t-breakfast')}</MenuItem>
          <MenuItem value={t('t-lunch')}>{t('t-lunch')}</MenuItem>
          <MenuItem value={t('t-dinner')}>{t('t-dinner')}</MenuItem>
        </Select>
      </FormControl>
      <Stack
        flexDirection={'row'}
        padding={'0.25rem'}
        justifyContent={'space-between'}
        width={'80%'}
      >
        <Button variant="contained" disabled={isNotEmpty} onClick={addHandleClick}>
          {t('t-add')}
        </Button>
        <Button variant="outlined" onClick={clearHandleClick}>
          {t('t-clear')}
        </Button>
        <Button variant="outlined" onClick={todayHandleClick}>
          {t('t-today')}
        </Button>
      </Stack>
      <Stack width={'10%'}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={['day']}
            onChange={handleDateChange}
            value={dayjs(selectedDate, 'DD.MM.YYYY')}
          />
        </LocalizationProvider>
      </Stack>
    </Stack>
  )
}

export default AddFoodForm
