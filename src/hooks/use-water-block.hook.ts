import { useCallback, useState } from 'react'
import { useAppContext } from '../context'
import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'
import { TWater } from '../Types/DataUserTypes'
import { DataType, OperationType } from '../shared/enums'
import { useDispatch, useSelector } from 'react-redux'
import { operationData } from '../store/slices/dataUserSlice'
import { getUserWater } from '../store/selectors/selectors'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

type WaterBlock = {
  waterMl: number | undefined
  allWater: Array<TWater>
  handleChangeWaterInput: (event: React.ChangeEvent<HTMLInputElement>) => void
  todayHandleClick: VoidFunction
  clearButtonHandler: VoidFunction
  addButtonHandler: VoidFunction
  deleteHandler: (id: string) => void
  getUserWaterDB: (date: string) => Promise<void>
}

function useWaterBlock(): WaterBlock {
  const [waterMl, setWaterMl] = useState<number | undefined>()
  const { selectedDate, handleDateChange } = useAppContext()
  const dispatch = useDispatch()
  const allWater = useSelector(getUserWater)
  const email = localStorage.getItem('email')

  const handleChangeWaterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWaterMl(Number(event.target.value))
  }
  const todayHandleClick = () => {
    handleDateChange(dayjs())
  }

  const clearButtonHandler = () => {
    setWaterMl(undefined)
  }
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
  const formatData = useCallback(
    (operation: OperationType, id?: string, value?: TWater) => {
      const copyWater = [...allWater]
      switch (operation) {
        case OperationType.ADD:
          return [...copyWater, value]
        case OperationType.REMOVE:
          return copyWater.filter((item) => item.id !== id)
      }
    },
    [allWater]
  )
  const setUserWaterDB = useCallback(
    async (operation: OperationType, id?: string, value?: TWater) => {
      const document = await checkOrCreateDocument(email!, selectedDate)
      const updateDocRef = doc(db, 'DataUsers', document)
      await updateDoc(updateDocRef, {
        UserWater: formatData(operation, id, value)
      })
    },
    [formatData, checkOrCreateDocument, email, selectedDate]
  )

  const addButtonHandler = () => {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const timeString = `${hours}:${minutes}`
    const userWater: TWater = {
      id: uuidv4(),
      ml: waterMl!,
      time: timeString
    }
    const sliceObject = {
      type: DataType.Water,
      operation: OperationType.ADD,
      newValue: userWater
    }
    dispatch(operationData(sliceObject))
    clearButtonHandler()
    setUserWaterDB(sliceObject.operation, undefined, sliceObject.newValue)
  }

  const deleteHandler = (id: string) => {
    const sliceObject = {
      type: DataType.Water,
      operation: OperationType.REMOVE,
      id: id
    }
    dispatch(operationData(sliceObject))
    setUserWaterDB(sliceObject.operation, sliceObject.id)
  }
  const setUserWaterRedux = (userWaterArray: Array<TWater>) => {
    userWaterArray.forEach((water) => {
      const sliceObject = {
        type: DataType.Water,
        operation: OperationType.ADD,
        newValue: water
      }
      dispatch(operationData(sliceObject))
    })
  }

  const getUserWaterDB = async (date: string) => {
    const foodRef = collection(db, 'DataUsers')
    const request = query(foodRef, where('date', '==', date), where('email', '==', email))
    const Snapshot = await getDocs(request)
    const { UserWater } = Snapshot.docs[0].data()
    const userFoodArray: Array<TWater> = UserWater as Array<TWater>
    setUserWaterRedux(userFoodArray)
  }

  return {
    waterMl,
    allWater,
    handleChangeWaterInput,
    todayHandleClick,
    clearButtonHandler,
    addButtonHandler,
    deleteHandler,
    getUserWaterDB
  }
}

export default useWaterBlock
