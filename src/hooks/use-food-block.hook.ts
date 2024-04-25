import { SelectChangeEvent } from '@mui/material'
import { useCallback, useState } from 'react'
import { useAppContext } from '../context'
import dayjs from 'dayjs'
import { TFood } from '../Types/DataUserTypes'
import { useDispatch, useSelector } from 'react-redux'
import { operationData } from '../store/slices/dataUserSlice'
import { DataType, OperationType } from '../shared/enums'
import { t } from 'i18next'
import { getFoodByCategory, getUserFood } from '../store/selectors/selectors'
import { v4 as uuidv4 } from 'uuid'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

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
  const { handleDateChange, selectedDate } = useAppContext()
  const foodProgram = [t('t-breakfast'), t('t-lunch'), t('t-dinner')]
  const [nameFood, setNameFood] = useState<string>('')
  const [categoryFood, setCategoryFood] = useState<string>('')
  const isNotEmpty = !(nameFood && categoryFood)
  const dispatch = useDispatch()
  const breakfastFoods = useSelector((state) => getFoodByCategory(state, t('t-breakfast')))
  const allFoodUser = useSelector(getUserFood)
  const email = localStorage.getItem('email')

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

  const createobjectFood = (): TFood => ({
    id: uuidv4(),
    calories: 1,
    nameFood: nameFood,
    categoryFood: categoryFood
  })

  const checkOrCreateDocument = useCallback(
    async (userEmail: string, date: string) => {
      const request = query(
        collection(db, 'DataUsers'),
        where('email', '==', userEmail),
        where('date', '==', date)
      )
      const querySnapshot = await getDocs(request)

      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].id
      } else {
        const docRef = await addDoc(collection(db, 'DataUsers'), {
          email: email,
          date: selectedDate
        })

        return docRef.id
      }
    },
    [email, selectedDate]
  )

  const setUserFoodDB = useCallback(async () => {
    const document = await checkOrCreateDocument(email!, selectedDate)
    const updateDocRef = doc(db, 'DataUsers', document)
    await updateDoc(updateDocRef, {
      UserFood: allFoodUser
    })
  }, [allFoodUser, checkOrCreateDocument, email, selectedDate])

  const addHandleClick = () => {
    const sliceObject = {
      type: DataType.Food,
      operation: OperationType.ADD,
      newValue: createobjectFood()
    }
    dispatch(operationData(sliceObject))
    clearHandleClick()
    setUserFoodDB()
  }

  const deleteHandler = (id: string) => {
    const sliceObject = {
      type: DataType.Food,
      operation: OperationType.REMOVE,
      id: id
    }
    dispatch(operationData(sliceObject))
    setUserFoodDB()
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
