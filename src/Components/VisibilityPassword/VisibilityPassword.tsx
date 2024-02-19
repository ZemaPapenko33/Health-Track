import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import { TVisibilityPassword } from '../../Types/ComponentTypes'

const VisibilityPassword: React.FC<TVisibilityPassword> = ({
  showPassword,
  showPasswordHandler
}) => {
  return (
    <InputAdornment position="end">
      <IconButton onClick={showPasswordHandler}>
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  )
}

export default VisibilityPassword
