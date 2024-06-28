import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material'
import useMoodBlock from '../../hooks/use-mood-block.hook'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const MoodBlock = () => {
  const { months, year, days, handleChangeMonth, incrementYear, decrementYear } = useMoodBlock()

  return (
    <Stack
      width={'93%'}
      height={'100%'}
      flexWrap={'wrap'}
      padding={'0.5rem'}
      justifyContent={'center'}
    >
      <Stack flexDirection={'row'} height={'15%'} padding={'0.5rem'} justifyContent={'center'}>
        <Button onClick={decrementYear}>
          <ArrowBackIosIcon />
        </Button>
        <Typography variant="h3">{year}</Typography>
        <Button onClick={incrementYear}>
          <ArrowForwardIosIcon />
        </Button>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Month"
            style={{ width: '150px' }}
            onChange={handleChangeMonth}
          >
            {months.map((month) => {
              return (
                <MenuItem value={month.id} key={month.id}>
                  {month.monthName}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Stack>
      <Stack
        height={'85%'}
        flexDirection={'row'}
        flexWrap={'wrap'}
        padding={'0.5rem'}
        justifyContent={'center'}
      >
        {days.map((day) => {
          return (
            <Box
              marginRight={'0.5rem'}
              display={'flex'}
              width={'14%'}
              height={'10%'}
              justifyContent={'center'}
              alignItems={'center'}
              border={0.5}
              borderRadius={'0.75rem'}
            >
              {`${day.getDate()}`}
            </Box>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default MoodBlock
