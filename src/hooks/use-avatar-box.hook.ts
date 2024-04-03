import { useSelector } from 'react-redux'
import { selectUser } from '../store/selectors/selectors'
import { useState } from 'react'

type AvatarBoxHook = {
  avatarText: string
  anchorEl: HTMLElement | null
  open: boolean
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: VoidFunction
}

function useAvatarBox(): AvatarBoxHook {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const userInfo = useSelector(selectUser)
  const avatarText = userInfo.name[0] + userInfo.surname[0]
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return {
    anchorEl,
    avatarText,
    open,
    handleClose,
    handleClick
  }
}

export default useAvatarBox
