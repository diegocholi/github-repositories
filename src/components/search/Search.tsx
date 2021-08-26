import './style.scss'
import { FaSearch } from 'react-icons/fa'
export interface SearchProps {
    placeholder?: string
}
 
const Search: React.FC<SearchProps> = ({ placeholder = '' }) => {
    return (
        <div className='search-container'>
            <form>
                <div className='form-group'>
                    <FaSearch className='icon' />
                    <input 
                        type='search' 
                        placeholder={placeholder}
                        className='input-search'
                        name='search' 
                        id='search' />
                </div>
            </form>
        </div>
    )
}
 
export default Search;