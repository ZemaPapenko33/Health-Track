import React from 'react'
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined'
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined'
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined'
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined'
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined'
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined'
import FitbitOutlinedIcon from '@mui/icons-material/FitbitOutlined'
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined'
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import { Stack } from '@mui/material'
import { t } from 'i18next'

const Sidebar = () => {
  return (
    <Stack
      width={'5%'}
      height={'100%'}
      paddingTop={'0.5rem'}
      justifyContent={'flex-end'}
      overflow={'auto'}
    >
      <Stack
        width={'100%'}
        height={'50px'}
        marginBottom={'0.5rem'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{ background: 'green' }}
        borderRadius={'0 30px 30px 0'}
        paddingRight={'10px'}
      >
        <AssignmentIndOutlinedIcon />
        {t('t-profile')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <RestaurantOutlinedIcon />
        {t('t-food')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <LocalDrinkOutlinedIcon />
        {t('t-water')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <FitnessCenterOutlinedIcon />
        {t('t-fitness')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <MonitorWeightOutlinedIcon />
        {t('t-weight')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <AddReactionOutlinedIcon />
        {t('t-mood')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <SelfImprovementOutlinedIcon />
        {t('t-meditation')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <BedtimeOutlinedIcon />
        {t('t-sleeps')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <FitbitOutlinedIcon />
        {t('t-hobby')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <MonitorHeartOutlinedIcon />
        {t('t-tracking')}
      </Stack>
      <Stack gap={0.5} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <LocalHospitalOutlinedIcon />
        {t('t-tablet')}
      </Stack>
    </Stack>
  )
}

export default Sidebar
