import { Stack } from '@mui/material'
import { TProfile } from '../../Types/ComponentTypes'
import BMI from '../BMI/BMI'
import WaterBlock from '../Water/Water'
import CaloriesBlock from '../Calories/CaloriesBlock'
import ProfileSkeleton from '../ProfileSkeleton/ProfileSkeleton'

const Profile: React.FC<TProfile> = ({ userBMI, percentUserBMI, isLoading }) => {
  return (
    <Stack width={'93%'} alignItems={'center'} paddingTop={'1rem'}>
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <Stack width={'90%'} height={'50%'} direction={'row'} justifyContent={'space-around'}>
          <CaloriesBlock />
          <WaterBlock />
          <BMI userBMI={userBMI} percentUserBMI={percentUserBMI} />
        </Stack>
      )}
    </Stack>
  )
}

export default Profile
