import { useState } from 'react'
import { TMonths } from '../Types/ObjectTypes'
import { SelectChangeEvent } from '@mui/material'

type MoodBlock = {
  months: Array<TMonths>
  year: number
  handleChangeMonth: (event: SelectChangeEvent<number>) => void
  incrementYear: VoidFunction
  decrementYear: VoidFunction
  days: Array<Date>
  daysOfWeek: Array<string>
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
  const daysOfWeek = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
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
  const getDays = (myYear: number, myMonth: number): Date[] => {
    const daysInMonth = new Date(myYear, myMonth + 1, 0).getDate()
    const result: Date[] = new Array(daysInMonth)

    for (let index = 0; index < daysInMonth; index++) {
      result[index] = new Date(myYear, myMonth, index + 1)
    }

    return result
  }

  const days = getDays(year, month)

  return {
    daysOfWeek,
    months,
    year,
    days,
    handleChangeMonth,
    incrementYear,
    decrementYear
  }
}

export default useMoodBlock
