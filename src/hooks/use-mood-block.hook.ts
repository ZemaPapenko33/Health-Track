import { useState } from 'react'
import { TMonths } from '../Types/ObjectTypes'
import { SelectChangeEvent } from '@mui/material'

type MoodBlock = {
  months: Array<TMonths>
  year: number
  handleChangeMonth: (event: SelectChangeEvent<number>) => void
  incrementYear: VoidFunction
  decrementYear: VoidFunction
  days: Date[]
}

function useMoodBlock(): MoodBlock {
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [month, setMonth] = useState<number>(0)
  const months = [
    { monthName: 'January', id: 0 },
    { monthName: 'February', id: 1 },
    { monthName: 'March', id: 2 },
    { monthName: 'April', id: 3 },
    { monthName: 'May', id: 4 },
    { monthName: 'June', id: 5 },
    { monthName: 'July', id: 6 },
    { monthName: 'August', id: 7 },
    { monthName: 'September', id: 8 },
    { monthName: 'October', id: 9 },
    { monthName: 'November', id: 10 },
    { monthName: 'December', id: 11 }
  ]

  const handleChangeMonth = (event: SelectChangeEvent<number>) => {
    setMonth(+event.target.value)
  }

  const incrementYear = () => {
    setYear((prevYear) => prevYear + 1)
  }

  const decrementYear = () => {
    setYear((prevYear) => prevYear - 1)
  }
  const getDays = (myYear: number, myMonth: number) => {
    return Array.from(
      { length: new Date(myYear, myMonth + 1, 0).getDate() },
      (_, i) => new Date(myYear, myMonth, i + 1)
    )
  }

  const days = getDays(year, month)

  return {
    months,
    year,
    days,
    handleChangeMonth,
    incrementYear,
    decrementYear
  }
}

export default useMoodBlock
