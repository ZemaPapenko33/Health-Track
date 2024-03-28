import { CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import { t } from 'i18next'

const CaloriesBlock = () => {
  return (
    <Stack
      width={'33%'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      border={0.25}
      borderRadius={'1rem'}
      borderColor={theme.palette.blackGrey.main}
      position="relative"
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size={200}
        style={{ position: 'absolute', color: theme.palette.salad.main }}
      />
      <CircularProgress variant="determinate" value={20} size={200} />
      <Stack position="absolute" alignItems="center" justifyContent="center">
        <Typography variant="h5" color="textSecondary">
          0/1865
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {t('t-cal-today')}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default CaloriesBlock
