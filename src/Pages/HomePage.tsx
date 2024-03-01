import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'

const HomePage = (): JSX.Element => {
  useDefaultRedirect()

  return <div></div>
}

export default HomePage
