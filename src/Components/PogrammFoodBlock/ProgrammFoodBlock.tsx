import { CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import { TProgrammFood } from '../../Types/ComponentTypes'

const ProgrammFoodBlock: React.FC<TProgrammFood> = ({ title }) => {
  return (
    <Stack
      width={'33%'}
      height={'100%'}
      boxShadow={'0px 20px 24px -27px rgba(0,0,0) '}
      border={0.15}
      borderColor={theme.palette.blackGrey.main}
      borderRadius={'1rem'}
    >
      <Typography
        variant="h6"
        textAlign={'center'}
        borderBottom={1}
        borderColor={theme.palette.blackGrey.main}
      >
        {title}
      </Typography>
      <Stack flexDirection={'row'}>
        <Stack width={'50%'}></Stack>
        <Stack width={'50%'} position={'relative'} alignItems={'flex-end'} padding={'0.75rem'}>
          <CircularProgress
            variant="determinate"
            value={100}
            size={100}
            style={{ position: 'absolute', color: theme.palette.salad.main }}
          />
          <CircularProgress variant="determinate" value={0} size={100} />
          <Stack position="absolute" alignItems="center" justifyContent="center"></Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ProgrammFoodBlock
