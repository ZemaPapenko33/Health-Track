import { Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import React from 'react'
import { useAppContext } from '../../context'
import { t } from 'i18next'

const WaterBlock = () => {
  const { handleDateChange, selectedDate } = useAppContext()
  return (
    <Stack width={'93%'} height={'100%'}>
      <Stack flexDirection={'row'} height={'100%'}>
        <Stack width={'70%'} height={'100%'} borderRight={0.5}>
          <Typography variant="h4" textAlign={'center'}>
            Water today
          </Typography>
        </Stack>
        <Stack height={'100%'} width={'30%'} padding={'0.5rem'} justifyContent={'center'}>
          <TextField label="Water ml" variant="standard" type="number" inputProps={{ min: '1' }} />
          <Stack paddingTop={'0.5rem'} marginBottom={'0.5rem'}>
            <ButtonGroup>
              <Button variant="contained">{t('t-add')}</Button>
              <Button variant="outlined">{t('t-clear')}</Button>
              <Button variant="outlined">{t('t-today')}</Button>
            </ButtonGroup>
          </Stack>
          <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                views={['day']}
                onChange={handleDateChange}
                value={dayjs(selectedDate, 'DD.MM.YYYY')}
              />
            </LocalizationProvider>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default WaterBlock
