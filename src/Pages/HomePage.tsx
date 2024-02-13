import React from 'react'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'

const HomePage = (): JSX.Element => {
  useDefaultRedirect()

  return <div>Home page</div>
}

export default HomePage
