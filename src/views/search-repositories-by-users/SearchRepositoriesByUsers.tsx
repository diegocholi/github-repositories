import './style.scss'
import { useAppContext } from '../../contexts'
import { useEffect } from 'react'
import Profile from './components/Profile'
import RepositoryList from './components/RepositoryList'
import useRequest, { IRequestOptions } from '../../hooks/apiService'
import { useState } from 'react'
export interface SearchRepositoriesByUsersProps {
}
 
const SearchRepositoriesByUsers = () => {
    const appContext = useAppContext()
    const [page, setPage] = useState(1)
    const requestParams: IRequestOptions = {
        method: 'GET',
        url: `${appContext.search.searchValue}/repos`,
        pushValues: true,
        queryParams: {
            per_page: 24,
            page: page
        }
    }
    const [data, status, fetch] = useRequest(requestParams)

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        if(appContext.search.searchValue || page > 1)
            fetch()
    }, [appContext.search.searchValue, page, fetch])

    window.onscroll = () => {
        console.log(window.scrollY, window.innerHeight, document.body.offsetHeight)
        if (window.scrollY >= document.body.offsetHeight - 200) {
            setPage(page + 1)
        }
    }

    if(data.length === 0)
        return <> Nada Encontrado </>
    return (
        <div className='container-search-repositories-by-users'>
            <Profile 
                avatarUrl={data.length > 0 ? data[0].owner.avatar_url : ''}
                userGit={data.length > 0 ? data[0].owner.login : ''}
                urlGit={data.length > 0 ? data[0].owner.html_url : ''} />
            <RepositoryList data={data} />
            {status ? <>carregando...</> : ''}
        </div>
    )
}

export default SearchRepositoriesByUsers
