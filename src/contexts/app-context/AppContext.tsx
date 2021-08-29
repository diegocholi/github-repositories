import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import { Snackbar } from '../../components'
import { ISnackbarHandles } from '../../components/snackbar/Snackbar'
export interface AppProviderProps {}
export interface IAppState {
  search: {
    searchValue: string
    setSearchValue: (value: string) => void
  }
  theme: {
    themeType: boolean
    handleTheme: () => void
  }
  snackbar: {
    openSnackbar: (
      type: 'error' | 'warning' | 'info' | 'success',
      message: string
    ) => void
  }
}

const AppContext = createContext<IAppState>({
  search: {
    searchValue: '',
    setSearchValue: () => {},
  },
  theme: {
    themeType: false,
    handleTheme: () => {},
  },
  snackbar: {
    openSnackbar: () => {},
  },
})

export const AppProvider: PropsWithChildren<AppProviderProps> = ({
  children,
}: PropsWithChildren<AppProviderProps>) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [themeType, setThemeType] = useState<boolean>(
    localStorage.getItem('theme') === 'true' ? true : false
  )
  const snackbarRef = useRef<ISnackbarHandles>(null)

  const handleTheme = () => {
    if (themeType === false) {
      setThemeType(true)
      localStorage.setItem('theme', 'true')
      return
    }
    if (themeType === true) {
      setThemeType(false)
      localStorage.setItem('theme', 'false')
      return
    }
  }

  const openSnackbar = useCallback((type, message) => {
    console.log(type)
    snackbarRef.current?.openSnackbar(type, message)
  }, [])

  return (
    <AppContext.Provider
      value={{
        search: {
          searchValue: searchValue,
          setSearchValue: setSearchValue,
        },
        theme: {
          themeType: themeType,
          handleTheme: handleTheme,
        },
        snackbar: {
          openSnackbar: openSnackbar,
        },
      }}
    >
      <Snackbar ref={snackbarRef} />
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): IAppState => {
  return useContext(AppContext)
}
