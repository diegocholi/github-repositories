import './style.scss'
import { FaSearch } from 'react-icons/fa'
import { FormEvent, useRef } from 'react'
import { useAppContext } from '../../contexts'

export interface SearchProps {
    id?: string
    name?: string 
    placeholder?: string
}
 
const Search: React.FC<SearchProps> = ({ 
        id='search', 
        name='search', 
        placeholder='', 
    }) => {
    const initializeInputSearchRef = useRef<HTMLInputElement>(null)
    const appContext = useAppContext()
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(initializeInputSearchRef.current?.value)
            appContext.search.setSearchValue(String(initializeInputSearchRef.current?.value))
    }

    return (
        <div className='search-container'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <FaSearch className='icon' />
                    <input 
                        id={id}
                        name={name}
                        type='search' 
                        className='input-search'
                        ref={initializeInputSearchRef}
                        placeholder={placeholder} />
                </div>
            </form>
        </div>
    )
}
 
export default Search;