import { Stack, Typography } from '@mui/material'
import ProgrammFoodBlock from '../PogrammFoodBlock/ProgrammFoodBlock'
import AddFoodForm from '../AddFoodForm/AddFoodForm'

const FoodBlock = () => {
  const foodProgramm = ['Завтрак', 'Обед', 'Ужин']

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
            <Typography variant="h6">Завтрак</Typography>
          </Stack>
          <Stack width={'33%'} alignItems={'center'} borderRight={0.25}>
            <Typography variant="h6">Обед</Typography>
          </Stack>
          <Stack width={'33%'} alignItems={'center'}>
            <Typography variant="h6">Ужин</Typography>
          </Stack>
        </Stack>
        <AddFoodForm />
      </Stack>
    </Stack>
  )
}

export default FoodBlock
