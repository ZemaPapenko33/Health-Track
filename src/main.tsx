import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { BasicProvider } from './context'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <BasicProvider>
        <App />
      </BasicProvider>
    </BrowserRouter>
  </Provider>
)
