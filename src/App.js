import './App.scss'
import { AppProvider } from './contexts'
import Theme from './theme/Theme'

const App = () => {
    return (
      <AppProvider>
        <Theme />
      </AppProvider>
    )
}

export default App
