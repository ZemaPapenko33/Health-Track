import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import useMoodBlock from '../../hooks/use-mood-block.hook'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ButtonYear from '../ButtonYear/ButtonYear'
import { CalendarDayWrapper } from '../CalendarDay/CalendarDayStyled'

const MoodBlock = () => {
  const { daysOfWeek, months, year, days, handleChangeMonth, incrementYear, decrementYear } =
    useMoodBlock()

  return (
    <Stack
      width={'93%'}
      height={'100%'}
      flexWrap={'wrap'}
      padding={'0.5rem'}
      justifyContent={'center'}
    >
      <Stack flexDirection={'row'} height={'15%'} padding={'0.5rem'} justifyContent={'center'}>
        <ButtonYear onClickHandler={decrementYear} icon={<ArrowBackIosIcon />} />
        <Typography variant="h3">{year}</Typography>
        <ButtonYear onClickHandler={incrementYear} icon={<ArrowForwardIosIcon />} />
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Month"
            style={{ width: '150px' }}
            onChange={handleChangeMonth}
          >
            {months.map((month) => (
              <MenuItem value={month.id} key={month.id}>
                {month.monthName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button>Today</Button>
      </Stack>
      <Stack
        height={'85%'}
        flexDirection={'row'}
        flexWrap={'wrap'}
        paddingLeft={'1.5rem'}
        justifyContent={'flex-start'}
      >
        {days.map((day) => (
          <CalendarDayWrapper>
            {`${day.getDate()}`} | {`${daysOfWeek[day.getDay()]}`}
          </CalendarDayWrapper>
        ))}
      </Stack>
    </Stack>
  )
}

export default MoodBlock
