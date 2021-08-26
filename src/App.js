import './App.scss'
import { useState } from 'react'
import { PrimaryTheme, SecondaryTheme } from './theme'
import { SearchRepositoriesByUsers } from './views'
import { Header } from './components'


const App = () => {
    const [theme, setTheme] = useState({ Theme: PrimaryTheme, checked: false })
    
    const handleTheme = () => {
      if(theme.Theme === PrimaryTheme) {
        setTheme({ Theme: SecondaryTheme, checked: true })
        return
      }
      if(theme.Theme === SecondaryTheme) {
        setTheme({ Theme: PrimaryTheme, checked: false })
        return
      }
    }

    return (
      <theme.Theme className='reset-app'>
        <Header handleTheme={handleTheme} checked={theme.checked} />
        <main>
          <SearchRepositoriesByUsers />
        </main>
        <footer></footer>
      </theme.Theme>
    )
}

export default App
