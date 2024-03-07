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

const Sidebar = () => {
  return (
    <Stack
      width={'7%'}
      height={'100%'}
      padding={'2rem'}
      justifyContent={'flex-end'}
      overflow={'auto'}
    >
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <AssignmentIndOutlinedIcon />
        Profile
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <RestaurantOutlinedIcon />
        Food
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <LocalDrinkOutlinedIcon />
        Water
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <FitnessCenterOutlinedIcon />
        Fitness
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <MonitorWeightOutlinedIcon />
        Weight
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <AddReactionOutlinedIcon />
        Mood
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <SelfImprovementOutlinedIcon />
        Meditation
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <BedtimeOutlinedIcon />
        Sleeps
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <FitbitOutlinedIcon />
        Hobby
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <MonitorHeartOutlinedIcon />
        Monitor
      </Stack>
      <Stack gap={0.25} marginBottom={'0.5rem'} justifyContent={'center'} alignItems={'center'}>
        <LocalHospitalOutlinedIcon />
        Tablet
      </Stack>
    </Stack>
  )
}

export default Sidebar
