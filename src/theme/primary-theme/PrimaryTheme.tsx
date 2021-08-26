import './primaryTheme.scss'
import { ReactChild, FC } from "react"

export interface PrimaryThemeProps {
    className?: string | undefined
    children?: ReactChild | Element[] | JSX.Element[] | undefined 
}
const PrimaryTheme: FC<PrimaryThemeProps> = ({children = undefined, className = undefined}: PrimaryThemeProps) => <div className={`${className} primary-container-theme`}> {children} </div>
export default PrimaryTheme
