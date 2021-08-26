import './style.scss'
import { FaGithubAlt } from 'react-icons/fa'
export interface SearchRepositoriesByUsersProps {
}
 
const SearchRepositoriesByUsers = (props: SearchRepositoriesByUsersProps) => {
    return (
        <div className='container-search-repositories-by-users'>
            <div className='profile-user'>
                <div className='avatar-user-content'>
                    <img className='avatar-user' src="https://avatars.githubusercontent.com/u/48794883?v=4"  alt='avatar' />
                </div>
                <span className='user-login'>diegocholi</span>
                <a className='git-hub-profile-button' href="https://github.com/diegocholi" target='_blank' rel="noreferrer" >
                    Gitbub &nbsp;
                    <FaGithubAlt />
                </a>
            </div>
            <div className='repository-list'>
                content
            </div>
        </div>
    )
}

export default SearchRepositoriesByUsers
