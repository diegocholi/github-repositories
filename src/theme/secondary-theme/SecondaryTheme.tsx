import './secondaryTheme.scss'
import { ReactChild } from "react"

export interface SecondaryThemeProps {
    className?: string | undefined
    children?: ReactChild | undefined
}
const SecondaryTheme = ({children = undefined, className = undefined}: SecondaryThemeProps) => <div className={`${className} container-theme`}> {children} </div>
export default SecondaryTheme
