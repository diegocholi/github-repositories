import './style.scss'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

export interface NavigationProps {
    setPage: (page: Number) => void
    page: Number
}
 
const Navigation: React.FC<NavigationProps> = ({ page, setPage }) => ( 
        <div className='navigation'>
            <button onClick={() => setPage(page > 1 ? Number(page) - 1 : 1)}> <FaAngleLeft className='icon-navigation' size={20} /> </button>
            <button onClick={() => setPage(Number(page) + 1)}> <FaAngleRight className='icon-navigation' size={20} /> </button>
        </div>
     )
export default Navigation;