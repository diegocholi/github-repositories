import './primaryTheme.scss'
import { ReactChild } from "react"

export interface PrimaryThemeProps {
    className?: string | undefined
    children?: ReactChild | undefined
}
const PrimaryTheme = ({children = undefined, className = undefined}: PrimaryThemeProps) => <div className={`${className} container-theme`}> {children} </div>
export default PrimaryTheme