import { Skeleton, Stack } from '@mui/material'
import { TProfile } from '../../Types/ComponentTypes'
import BMI from '../BMI/BMI'
import WaterBlock from '../Water/Water'
import CaloriesBlock from '../Calories/CaloriesBlock'

const Profile: React.FC<TProfile> = ({ userBMI, percentUserBMI, isLoading }) => {
  return (
    <Stack width={'93%'} alignItems={'center'} paddingTop={'1rem'}>
      {isLoading ? (
        <Stack width={'90%'} height={'50%'} direction={'row'} justifyContent={'space-around'}>
          <Skeleton animation="wave" variant="rounded" height={'100%'} width={'33%'} />
          <Skeleton animation="wave" variant="rounded" height={'100%'} width={'33%'} />
          <Skeleton animation="wave" variant="rounded" height={'100%'} width={'33%'} />
        </Stack>
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
