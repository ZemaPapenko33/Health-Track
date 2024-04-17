import React from 'react'
import { ContentSwitch } from '../ContentSwitch/ContentSwitch'
import { TContentHomePage } from '../../Types/ComponentTypes'
import { t } from 'i18next'
import Profile from '../Profile/Profile'
import FoodBlock from '../FoodBlock/FoodBlock'

const ContentHomePage: React.FC<TContentHomePage> = ({
  selectedMenu,
  userBMI,
  percentUserBMI,
  isLoading
}) => {
  return (
    <ContentSwitch selectedMenu={selectedMenu}>
      <Profile
        data-text={t('t-profile')}
        userBMI={userBMI}
        percentUserBMI={percentUserBMI}
        isLoading={isLoading}
      />
      <FoodBlock data-text={t('t-food')} />
    </ContentSwitch>
  )
}

export default ContentHomePage
