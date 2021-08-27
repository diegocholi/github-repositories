import { useState } from 'react'
import { createContext, PropsWithChildren, useContext } from 'react'

export interface AppProviderProps {
}
export interface IAppState{
    search: {
        searchValue: string
        setSearchValue: (value: string) => void
    }
    theme: {
        themeType: boolean
        handleTheme: () => void
    }
}
 
const AppContext = createContext<IAppState>({
    search: {
        searchValue: '',
        setSearchValue: () => {}
    },
    theme: {
        themeType: false,
        handleTheme: () => {}
    }
})

export const AppProvider: PropsWithChildren<AppProviderProps> = ({ children }: PropsWithChildren<AppProviderProps>) => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [themeType, setThemeType] = useState<boolean>(localStorage.getItem('theme') === 'true' ? true : false)

    const handleTheme = () => {
      if(themeType === false) {
        setThemeType(true)
        localStorage.setItem('theme', 'true')
        return
      }
      if(themeType === true) {
        setThemeType(false)
        localStorage.setItem('theme', 'false')
        return
      }
    }
    return (
        <AppContext.Provider value={{
            search: {
                searchValue: searchValue,
                setSearchValue: setSearchValue
            },
            theme: {
                themeType: themeType,
                handleTheme: handleTheme
            }
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = (): IAppState => {
    return useContext(AppContext)
}
