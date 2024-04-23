import { SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import { useAppContext } from '../context'
import dayjs from 'dayjs'
import { TFood } from '../Types/DataUserTypes'
import { useDispatch, useSelector } from 'react-redux'
import { operationData } from '../store/slices/dataUserSlice'
import { DataType, OperationType } from '../shared/enums'
import { t } from 'i18next'
import { getFoodByCategory } from '../store/selectors/selectors'
import { v4 as uuidv4 } from 'uuid'

type FoodBlock = {
  foodProgram: Array<string>
  nameFood: string
  clearHandleClick: VoidFunction
  todayHandleClick: VoidFunction
  addHandleClick: VoidFunction
  onChangeNameFood: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeCategory: (event: SelectChangeEvent<string>) => void
  deleteHandler: (id: string) => void
  categoryFood: string
  isNotEmpty: boolean
  breakfastFoods: Array<TFood>
}

function useFoodBlock(): FoodBlock {
  const { handleDateChange } = useAppContext()
  const foodProgram = [t('t-breakfast'), t('t-lunch'), t('t-dinner')]
  const [nameFood, setNameFood] = useState<string>('')
  const [categoryFood, setCategoryFood] = useState<string>('')
  const isNotEmpty = !(nameFood && categoryFood)
  const dispatch = useDispatch()
  const breakfastFoods = useSelector((state) => getFoodByCategory(state, t('t-breakfast')))

  const clearHandleClick = () => {
    setNameFood('')
    setCategoryFood('')
  }

  const onChangeNameFood = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFood(event.target.value)
  }

  const onChangeCategory = (event: SelectChangeEvent<string>) => {
    setCategoryFood(event.target.value)
  }

  const todayHandleClick = () => {
    handleDateChange(dayjs())
  }

  const createobjectFood = (): TFood => {
    const userFood = {
      id: uuidv4(),
      calories: 1,
      nameFood: nameFood,
      categoryFood: categoryFood
    }

    return userFood
  }

  const addHandleClick = () => {
    const sliceObject = {
      type: DataType.Food,
      operation: OperationType.ADD,
      newValue: createobjectFood()
    }
    dispatch(operationData(sliceObject))
    clearHandleClick()
  }

  const deleteHandler = (id: string) => {
    const sliceObject = {
      type: DataType.Food,
      operation: OperationType.REMOVE,
      id: id
    }
    dispatch(operationData(sliceObject))
  }

  return {
    foodProgram,
    nameFood,
    categoryFood,
    isNotEmpty,
    breakfastFoods,
    clearHandleClick,
    onChangeNameFood,
    onChangeCategory,
    todayHandleClick,
    addHandleClick,
    deleteHandler
  }
}

export default useFoodBlock
