import React from 'react'
import { IconSwitch } from './IconSwitch'
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
import { t } from 'i18next'

const Icons = ({ text }: { text: string }) => {
  return (
    <IconSwitch text={text}>
      <AssignmentIndOutlinedIcon data-text={t('t-profile')} />
      <RestaurantOutlinedIcon data-text={t('t-food')} />
      <LocalDrinkOutlinedIcon data-text={t('t-water')} />
      <FitnessCenterOutlinedIcon data-text={t('t-fitness')} />
      <MonitorWeightOutlinedIcon data-text={t('t-weight')} />
      <AddReactionOutlinedIcon data-text={t('t-mood')} />
      <SelfImprovementOutlinedIcon data-text={t('t-meditation')} />
      <BedtimeOutlinedIcon data-text={t('t-sleeps')} />
      <FitbitOutlinedIcon data-text={t('t-hobby')} />
      <MonitorHeartOutlinedIcon data-text={t('t-tracking')} />
      <LocalHospitalOutlinedIcon data-text={t('t-tablet')} />
    </IconSwitch>
  )
}

export default Icons
