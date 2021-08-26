import './secondaryTheme.scss'
import { ReactChild, FC } from "react"

export interface SecondaryThemeProps {
    className?: string | undefined
    children?: ReactChild | Element[] | JSX.Element[] | undefined
}
const SecondaryTheme: FC<SecondaryThemeProps> = ({children = undefined, className = undefined}: SecondaryThemeProps) => <div className={`${className} secondary-container-theme`}> {children} </div>
export default SecondaryTheme
