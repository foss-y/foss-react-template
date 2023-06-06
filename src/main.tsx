import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { AliveScope } from 'react-activation'

import store from '@/store'
import { router } from './router'
import { ThemeProvider } from 'styled-components'
import { CookiesProvider } from 'react-cookie'
import defaultTheme from './assets/theme/default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <CookiesProvider>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <AliveScope>
          <RouterProvider router={router} />
        </AliveScope>
      </ThemeProvider>
    </Provider>
  </CookiesProvider>
  // </React.StrictMode>
)
