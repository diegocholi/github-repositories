import './style.scss'
import { Search, Switch } from '../../components'
import { FaGithubSquare } from 'react-icons/fa'

export interface HeaderProps {
}
 
const Header: React.FC<HeaderProps> = () => (
     <header>
        <div className='header-logo'>
            <FaGithubSquare className='icon-logo-github' size='65px' />
        </div>
        <div className='header-search'>
            <Search placeholder='Buscar' />
        </div>
        <div className='handle-theme-btn-content'>
           <Switch themeSwich />
        </div>
    </header> 
)

export default Header
