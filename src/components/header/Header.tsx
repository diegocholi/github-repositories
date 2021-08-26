import './style.scss'
import { Search } from '../../components'
import { FaGithubSquare } from 'react-icons/fa'

export interface HeaderProps {
    
}
 
const Header = () => {
    return <header>
        <div className='header-logo'>
            <FaGithubSquare className='icon-logo-github' size='65px' />
        </div>
        <div className='header-search'>
            <Search />
        </div>
    </header> 
}
 
export default Header