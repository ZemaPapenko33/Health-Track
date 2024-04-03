import { DocumentData, QuerySnapshot, collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../firebase/firebaseConfig'
import { setUser } from '../store/slices/userSlice'
import { selectUser } from '../store/selectors/selectors'
import { useState } from 'react'
import { t } from 'i18next'
import { signOut } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'
import { TSidebarItemObject } from '../Types/ObjectTypes'
import { UserInfo } from '../Types/UserTypes'
import {
  HEIGHT_CONVERSION_FACTOR,
  MAX_BMI,
  PERCENT_CONVERSION_FACTOR,
  SQUARE
} from '../shared/consts/BMI'

type HomePageHook = {
  getUser: () => Promise<void>
  isTrackingAndTablet: boolean
  sidebarItems: Array<TSidebarItemObject>
  selectedMenu: string
  sidebarItemClick: (index: number) => void
  logOut: VoidFunction
  userInfo: UserInfo
  userBMI: number
  isLoading: boolean
  percentUserBMI: number
}

function useHomePage(): HomePageHook {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfo = useSelector(selectUser)
  const email = localStorage.getItem('email')
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const [selectedMenu, setSelectedMenu] = useState<string>(t(`t-${queryParams.get('activeMenu')}`))

  const isTrackingAndTablet = userInfo.notices
  const userBMI = Math.floor(
    userInfo.weight / (userInfo.height / HEIGHT_CONVERSION_FACTOR) ** SQUARE
  )
  const percentUserBMI = Math.floor((userBMI / MAX_BMI) * PERCENT_CONVERSION_FACTOR)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const sidebarItems = [
    { id: 1, text: `${t('t-profile')}` },
    { id: 2, text: `${t('t-food')}` },
    { id: 3, text: `${t('t-water')}` },
    { id: 4, text: `${t('t-fitness')}` },
    { id: 5, text: `${t('t-weight')}` },
    { id: 6, text: `${t('t-mood')}` },
    { id: 7, text: `${t('t-meditation')}` },
    { id: 8, text: `${t('t-sleeps')}` },
    { id: 9, text: `${t('t-hobby')}` }
  ]

  if (isTrackingAndTablet) {
    sidebarItems.push({ id: 10, text: `${t('t-tracking')}` }, { id: 11, text: `${t('t-tablet')}` })
  }

  const sidebarItemClick = (index: number) => {
    setSelectedMenu(sidebarItems[index].text)
    const newQueryParams = new URLSearchParams()
    newQueryParams.set('activeMenu', sidebarItems[index].text.toLocaleLowerCase())
    window.history.replaceState({}, '', `${location.pathname}?${newQueryParams.toString()}`)
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
    setIsLoading(true)
    const userRef = collection(db, 'Users')
    const request = query(userRef, where('email', '==', email))
    const Snapshot = await getDocs(request)
    setUserInfo(Snapshot)
    setIsLoading(false)
  }

  const logOut = () => {
    signOut(auth)
    localStorage.clear()
    navigate(PageRoutes.LOGIN_ROUTE)
  }

  return {
    isTrackingAndTablet,
    selectedMenu,
    sidebarItems,
    userInfo,
    userBMI,
    isLoading,
    percentUserBMI,
    getUser,
    sidebarItemClick,
    logOut
  }
}

export default useHomePage
