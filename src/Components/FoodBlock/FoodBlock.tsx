import { Stack, Typography } from '@mui/material'
import ProgrammFoodBlock from '../PogrammFoodBlock/ProgrammFoodBlock'
import AddFoodForm from '../AddFoodForm/AddFoodForm'
import { t } from 'i18next'

const FoodBlock = () => {
  const foodProgramm = [t('t-breakfast'), t('t-lunch'), t('t-dinner')]

  return (
    <Stack width={'93%'} height={'100%'}>
      <Stack
        flexDirection={'row'}
        width={'100%'}
        height={'35%'}
        alignItems={'center'}
        padding={'1rem'}
        justifyContent={'space-between'}
      >
        {foodProgramm.map((title) => {
          return <ProgrammFoodBlock title={title} key={title} />
        })}
      </Stack>
      <Stack flexDirection={'row'} width={'100%'} height={'65%'}>
        <Stack width={'70%'} flexDirection={'row'}>
          <Stack width={'33%'} alignItems={'center'} borderRight={0.25}>
            <Typography variant="h6">{t('t-breakfast')}</Typography>
          </Stack>
          <Stack width={'33%'} alignItems={'center'} borderRight={0.25}>
            <Typography variant="h6">{t('t-lunch')}</Typography>
          </Stack>
          <Stack width={'33%'} alignItems={'center'}>
            <Typography variant="h6">{t('t-dinner')}</Typography>
          </Stack>
        </Stack>
        <AddFoodForm />
      </Stack>
    </Stack>
  )
}

export default FoodBlock
