import './secondaryTheme.scss'
import { ReactChild } from "react"

export interface SecondaryThemeProps {
    className: string
    children: ReactChild
}
const SecondaryTheme = ({children, className = ''}: SecondaryThemeProps) => <div className={`${className} container-theme`}> {children} </div>
export default SecondaryTheme
