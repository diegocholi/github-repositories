import './style.scss'
import { FaSearch } from 'react-icons/fa'
export interface SearchProps {
}
 
const Search = (props: SearchProps) => {
    return (
        <div className='search-container'>
            <form>
                <div className='form-group align-center'>
                    <FaSearch className='icon' />
                    <input type='search' className='input-search' name='search' id='search' />
                </div>
            </form>
        </div>
    )
}
 
export default Search;