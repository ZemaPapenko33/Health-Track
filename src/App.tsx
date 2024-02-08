import { ThemeProvider } from '@mui/material'
import './App.css'
import Routers from './Components/Routers'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  )
}

export default App
