import './App.scss'
import { useState } from 'react'
import { PrimaryTheme, SecondaryTheme } from './theme'
import { SearchRepositoriesByUsers } from './views'
import { Header  } from './components'

const App = () => {
    const [theme, setTheme] = useState({ Theme: PrimaryTheme })
    const handleTheme = () => {
      setTheme({ Theme: SecondaryTheme })
      console.log('Ola Mundo!')
    }
    return (
      <theme.Theme className='reset-app'>
        <Header />
        <main>
          <SearchRepositoriesByUsers />
        </main>
        <input type="button" value="Handle Theme" onClick={handleTheme} />
        <footer></footer>
      </theme.Theme>
    )
}

export default App
