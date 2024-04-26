import { Stack, Typography } from '@mui/material'
import ProgrammFoodBlock from '../PogrammFoodBlock/ProgrammFoodBlock'
import AddFoodForm from '../AddFoodForm/AddFoodForm'
import useFoodBlock from '../../hooks/use-food-block.hook'
import { t } from 'i18next'
import { useAppContext } from '../../context'
import { FoodChipWrapper } from '../FoodChip/FoodChipStyled'
import { useEffect } from 'react'

const FoodBlock = () => {
  const {
    foodProgram,
    nameFood,
    isNotEmpty,
    breakfastFoods,
    clearHandleClick,
    todayHandleClick,
    addHandleClick,
    onChangeNameFood,
    onChangeCategory,
    deleteHandler,
    getUserFoodDB,
    categoryFood
  } = useFoodBlock()
  const { handleDateChange, selectedDate } = useAppContext()

  useEffect(() => {
    getUserFoodDB(selectedDate)
  }, [])

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
        {foodProgram.map((title) => {
          return <ProgrammFoodBlock title={title} key={title} />
        })}
      </Stack>
      <Stack flexDirection={'row'} width={'100%'} height={'65%'}>
        <Stack width={'70%'} flexDirection={'row'}>
          <Stack width={'33%'} alignItems={'center'} borderRight={0.25} padding={'0.25rem'}>
            <Typography variant="h6">{t('t-breakfast')}</Typography>
            {breakfastFoods.map((item, index) => {
              return (
                <FoodChipWrapper
                  key={index}
                  variant="outlined"
                  color="success"
                  label={item.nameFood}
                  id={item.id}
                  onDelete={() => deleteHandler(item.id)}
                />
              )
            })}
          </Stack>
          <Stack width={'33%'} alignItems={'center'} borderRight={0.25}>
            <Typography variant="h6">{t('t-lunch')}</Typography>
          </Stack>
          <Stack width={'33%'} alignItems={'center'}>
            <Typography variant="h6">{t('t-dinner')}</Typography>
          </Stack>
        </Stack>
        <AddFoodForm
          nameFood={nameFood}
          categoryFood={categoryFood}
          clearHandleClick={clearHandleClick}
          onChangeNameFood={onChangeNameFood}
          onChangeCategory={onChangeCategory}
          isNotEmpty={isNotEmpty}
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          todayHandleClick={todayHandleClick}
          addHandleClick={addHandleClick}
        />
      </Stack>
    </Stack>
  )
}

export default FoodBlock
