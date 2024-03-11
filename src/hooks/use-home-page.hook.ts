import { DocumentData, QuerySnapshot, collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase/firebaseConfig'
import { setUser } from '../store/slices/userSlice'
import { selectUser } from '../store/selectors/selectors'
import { useState } from 'react'

type HomePageHook = {
  getUser: () => Promise<void>
  avatarText: string
  handleClose: VoidFunction
  open: boolean
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  anchorEl: null | HTMLElement
}

function useHomePage(): HomePageHook {
  const dispatch = useDispatch()
  const userInfo = useSelector(selectUser)
  const email = localStorage.getItem('email')
  const avatarText = userInfo.name[0] + userInfo.surname[0]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const setUserInfo = (Snapshot: QuerySnapshot<DocumentData, DocumentData>) => {
    Snapshot.forEach((doc) => {
      const { name, surname, middleName, age, gender, activity, goal, height, weight, notices } =
        doc.data()
      const user = {
        name,
        surname,
        middleName,
        age,
        gender,
        activity,
        goal,
        height,
        weight,
        notices
      }
      dispatch(setUser(user))
    })
  }

  const getUser = async () => {
    const userRef = collection(db, 'Users')
    const request = query(userRef, where('email', '==', email))
    const Snapshot = await getDocs(request)
    setUserInfo(Snapshot)
  }

  return {
    getUser,
    avatarText,
    open,
    anchorEl,
    handleClose,
    handleClick
  }
}

export default useHomePage
