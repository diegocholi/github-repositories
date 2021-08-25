import './primaryTheme.scss'
import { ReactChild } from "react"

export interface PrimaryThemeProps {
    className: string
    children: ReactChild
}
const PrimaryTheme = ({children, className = ''}: PrimaryThemeProps) => <div className={`${className} container-theme`}> {children} </div>
export default PrimaryTheme