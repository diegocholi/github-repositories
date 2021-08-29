import './style.scss'
import { FC, PropsWithChildren } from 'react'
export interface CardProps {
    onClick?: () => void
    className?: string
}
 
const Card: FC<CardProps> = ({children, onClick, className} : PropsWithChildren<CardProps>) => {
    return ( 
        <div 
            className={`${className} card-component`} 
            onClick={onClick}>
            {children}
        </div>
     );
}
 
export default Card
