import './style.scss'
import { Search, Switch } from '../../components'
import { FaGithubSquare } from 'react-icons/fa'

export interface HeaderProps {
    handleTheme: () => void
    checked: boolean
}
 
const Header: React.FC<HeaderProps> = ({handleTheme, checked}) => (
     <header>
        <div className='header-logo'>
            <FaGithubSquare className='icon-logo-github' size='65px' />
        </div>
        <div className='header-search'>
            <Search placeholder='Buscar' />
        </div>
        <div className='handle-theme-btn-content'>
           <Switch onClick={handleTheme} checked={checked} />
        </div>
    </header> 
)

export default Header
