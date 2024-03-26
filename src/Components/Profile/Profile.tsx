import { CircularProgress, Stack, Typography } from '@mui/material'
import { theme } from '../../theme'
import { TProfile } from '../../Types/ComponentTypes'
import { t } from 'i18next'
import { dataForBMI } from '../../utils/dataForBMI'

const Profile: React.FC<TProfile> = ({ userBMI, percentUserBMI }) => {
  const BMIData = dataForBMI(userBMI)

  return (
    <Stack width={'93%'} alignItems={'center'} paddingTop={'1rem'}>
      <Stack width={'90%'} height={'50%'} direction={'row'} justifyContent={'space-around'}>
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
          <CircularProgress variant="determinate" value={20} size={200} />
          <Stack position="absolute" alignItems="center" justifyContent="center">
            <Typography variant="h5" color="textSecondary">
              0/1865
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {t('t-cal-today')}
            </Typography>
          </Stack>
        </Stack>
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
            style={{ position: 'absolute', color: theme.palette.blackGrey.main }}
          />
          <CircularProgress
            variant="determinate"
            value={20}
            size={200}
            style={{ color: theme.palette.lightBlue.main }}
          />
          <Stack position="absolute" alignItems="center" justifyContent="center">
            <Typography variant="h5" color="textSecondary">
              0/1865
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {t('t-water-today')}
            </Typography>
          </Stack>
        </Stack>
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
      </Stack>
    </Stack>
  )
}

export default Profile
