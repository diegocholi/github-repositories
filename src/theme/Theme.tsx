import { Header } from '../components'
import { SearchRepositoriesByUsers } from '../views'
import { useAppContext } from '../contexts'
import PrimaryTheme from './primary-theme/PrimaryTheme'
import SecondaryTheme from './secondary-theme/SecondaryTheme'

const Theme =  () => {
    const appContext = useAppContext()
    const Theme = appContext.theme.themeType ?  SecondaryTheme : PrimaryTheme
    return (
          <Theme className='reset-app'>
            <Header />
            <main>
              <SearchRepositoriesByUsers />
            </main>
            <footer></footer>
          </Theme>
      )
}

export default Theme