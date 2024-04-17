import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
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
          <MenuItem value={10}>Завтрак</MenuItem>
          <MenuItem value={20}>Обед</MenuItem>
          <MenuItem value={30}>Ужин</MenuItem>
          <MenuItem value={1}>Дополнительный прием пищи</MenuItem>
        </Select>
      </FormControl>
      <Stack
        flexDirection={'row'}
        padding={'0.25rem'}
        justifyContent={'space-between'}
        width={'37%'}
      >
        <Button variant="contained">Add</Button>
        <Button variant="outlined">Clear</Button>
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
