import './style.scss'
import { FaGithubAlt } from 'react-icons/fa'
export interface SearchRepositoriesByUsersProps {
}
 
const SearchRepositoriesByUsers = (props: SearchRepositoriesByUsersProps) => {
    const dataCards = [{
        title: 'BICorrentistas',
        branch: 'main',
        date: '10-10-2019',
        language: 'TSQL'
    },
    {
        title: 'BICorrentistas',
        branch: 'main',
        date: '10-10-2019',
        language: 'TSQL'
    },
    {
        title: 'BICorrentistas',
        branch: 'main',
        date: '10-10-2019',
        language: 'TSQL'
    },
    {
        title: 'BICorrentistas',
        branch: 'main',
        date: '10-10-2019',
        language: 'TSQL'
    },
    {
        title: 'BICorrentistas',
        branch: 'main',
        date: '10-10-2019',
        language: 'TSQL'
    },
    {
        title: 'BICorrentistas',
        branch: 'main',
        date: '10-10-2019',
        language: 'TSQL'
    },
    {
        title: 'BICorrentistas',
        branch: 'main',
        date: '10-10-2019',
        language: 'TSQL'
    },
    {
        title: 'BICorrentistas',
        branch: 'main',
        date: '10-10-2019',
        language: 'TSQL'
    }]
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
                <div className='container' >
                    <div className='col-4'>
                        {dataCards.map(item => (
                            <div className='card-repository'>
                                <div className='card-repository-title'>
                                    {item.title}
                                </div>
                                <div className='card-repository-date'>
                                    {item.date}
                                </div>
                                <div className='card-repository-branch'>
                                    {item.branch}
                                </div>
                                <div className='card-repository-language'>
                                    {item.language}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchRepositoriesByUsers
