import React from 'react'
import { ContentSwitch } from '../ContentSwitch/ContentSwitch'
import { TContentHomePage } from '../../Types/ComponentTypes'
import { t } from 'i18next'
import { Stack } from '@mui/material'
import Profile from '../Profile/Profile'

const ContentHomePage: React.FC<TContentHomePage> = ({ selectedMenu, userBMI, percentUserBMI }) => {
  return (
    <ContentSwitch selectedMenu={selectedMenu}>
      <Profile data-text={t('t-profile')} userBMI={userBMI} percentUserBMI={percentUserBMI} />
      <Stack>This will be block Food</Stack>
    </ContentSwitch>
  )
}

export default ContentHomePage
