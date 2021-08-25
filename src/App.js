import './App.scss'
import { PrimaryTheme } from './theme'
import { SearchRepositoriesByUsers } from './views'
const App = () => (
    <PrimaryTheme className='reset-app'>
      <SearchRepositoriesByUsers />
    </PrimaryTheme>
)

export default App
