import React from 'react'
import { ContentSwitch } from '../ContentSwitch/ContentSwitch'
import { TContentHomePage } from '../../Types/ComponentTypes'
import { t } from 'i18next'
import Profile from '../Profile/Profile'
import FoodBlock from '../FoodBlock/FoodBlock'
import WaterBlock from '../WaterBlock/WaterBlock'
import MoodBlock from '../MoodBlock/MoodBlock'

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
      <WaterBlock data-text={t('t-water')} />
      <MoodBlock data-text={t('t-mood')} />
    </ContentSwitch>
  )
}

export default ContentHomePage
