import { useAppContext } from '../../../contexts'

export interface InputContextProps {}
const InputContext: React.FC<InputContextProps> = () => {
  const appContext = useAppContext()
  return (
    <input
      type='checkbox'
      onChange={appContext.theme.handleTheme}
      checked={appContext.theme.themeType}
    />
  )
}
export default InputContext
