import { ThemeProvider } from '@mui/material'
import './App.css'
import Routers from './Components/Routers'
import { theme } from './theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
