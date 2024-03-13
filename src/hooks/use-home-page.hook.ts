import { DocumentData, QuerySnapshot, collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase/firebaseConfig'
import { setUser } from '../store/slices/userSlice'
import { selectUser } from '../store/selectors/selectors'
import { useState } from 'react'
import { t } from 'i18next'

type HomePageHook = {
  getUser: () => Promise<void>
  avatarText: string
  handleClose: VoidFunction
  open: boolean
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  anchorEl: null | HTMLElement
  sidebarItems: Array<string>
  selectedMenu: string
  sidebarItemClick: (index: number) => void
}

function useHomePage(): HomePageHook {
  const dispatch = useDispatch()
  const userInfo = useSelector(selectUser)
  const email = localStorage.getItem('email')
  const avatarText = userInfo.name[0] + userInfo.surname[0]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedMenu, setSelectedMenu] = useState<string>(`${t('t-profile')}`)
  const open = Boolean(anchorEl)
  const sidebarItems = [
    `${t('t-profile')}`,
    `${t('t-food')}`,
    `${t('t-water')}`,
    `${t('t-fitness')}`,
    `${t('t-weight')}`,
    `${t('t-mood')}`,
    `${t('t-meditation')}`,
    `${t('t-sleeps')}`,
    `${t('t-hobby')}`,
    `${t('t-tracking')}`,
    `${t('t-tablet')}`
  ]

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const sidebarItemClick = (index: number) => {
    setSelectedMenu(sidebarItems[index])
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
    selectedMenu,
    avatarText,
    open,
    anchorEl,
    sidebarItems,
    handleClose,
    handleClick,
    getUser,
    sidebarItemClick
  }
}

export default useHomePage
