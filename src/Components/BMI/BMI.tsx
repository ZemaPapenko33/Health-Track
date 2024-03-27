import { CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import { dataForBMI } from '../../utils/dataForBMI'
import { t } from 'i18next'
import { TBMI } from '../../Types/ComponentTypes'

const BMI: React.FC<TBMI> = ({ userBMI, percentUserBMI }) => {
  const BMIData = dataForBMI(userBMI)

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
      <CircularProgress
        variant="determinate"
        value={percentUserBMI}
        size={200}
        style={{ color: BMIData.color }}
      />
      <Stack position="absolute" alignItems="center" justifyContent="center">
        <Typography variant="h6" color="textSecondary">
          {t('t-your-BMI')}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          {userBMI}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {BMIData.message}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default BMI
