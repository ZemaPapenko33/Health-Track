import { DocumentData, QuerySnapshot, collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../firebase/firebaseConfig'
import { setUser } from '../store/slices/userSlice'
import { selectUser } from '../store/selectors/selectors'
import { useState } from 'react'
import { t } from 'i18next'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'
import { TSidebarItemObject } from '../Types/ObjectTypes'

type HomePageHook = {
  getUser: () => Promise<void>
  avatarText: string
  handleClose: VoidFunction
  open: boolean
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  anchorEl: null | HTMLElement
  sidebarItems: Array<TSidebarItemObject>
  selectedMenu: string
  sidebarItemClick: (index: number) => void
  logOut: VoidFunction
}

function useHomePage(): HomePageHook {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfo = useSelector(selectUser)
  const email = localStorage.getItem('email')
  const avatarText = userInfo.name[0] + userInfo.surname[0]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedMenu, setSelectedMenu] = useState<string>(`${t('t-profile')}`)
  const open = Boolean(anchorEl)
  const sidebarItems = [
    { id: 1, text: `${t('t-profile')}` },
    { id: 2, text: `${t('t-food')}` },
    { id: 3, text: `${t('t-water')}` },
    { id: 4, text: `${t('t-fitness')}` },
    { id: 5, text: `${t('t-weight')}` },
    { id: 6, text: `${t('t-mood')}` },
    { id: 7, text: `${t('t-meditation')}` },
    { id: 8, text: `${t('t-sleeps')}` },
    { id: 9, text: `${t('t-hobby')}` },
    { id: 10, text: `${t('t-tracking')}` },
    { id: 11, text: `${t('t-tablet')}` }
  ]

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const sidebarItemClick = (index: number) => {
    setSelectedMenu(sidebarItems[index].text)
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

  const logOut = () => {
    signOut(auth)
    localStorage.clear()
    navigate(PageRoutes.LOGIN_ROUTE)
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
    sidebarItemClick,
    logOut
  }
}

export default useHomePage
