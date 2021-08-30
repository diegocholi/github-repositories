import './style.scss'
import { useAppContext } from '../../contexts'
import { Pagination, Loading } from '../../components'
import { useEffect, useRef } from 'react'
import Profile from './components/Profile'
import RepositoryList from './components/RepositoryList'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { repositoryService } from '../../services/repository'
import useQuery from '../../hooks/useQuery'

export interface SearchRepositoriesByUsersProps {}

const SearchRepositoriesByUsers = () => {
  const appContext = useAppContext()
  const pageRef = useRef<string>('')

  const [page, setPage] = useState<Number>(1)
  const [dataQuery, loading] = useQuery({
    query: repositoryService(appContext.search.searchValue, pageRef.current),
  })

  const handlePage = (pageNumber: Number, operaction?: '-' | '+') => {
    if (dataQuery) {
      const startCursor =
        dataQuery.repositoryOwner.repositories.edges[
          dataQuery.repositoryOwner.repositories.edges.length - 1
        ].cursor
      const endCursor = dataQuery.repositoryOwner.repositories.edges[0].cursor
      if (
        operaction === '+' &&
        dataQuery.repositoryOwner.repositories.pageInfo.hasNextPage
      ) {
        pageRef.current = `, after: "${startCursor}"`
        setPage(pageNumber)
      }
      if (
        operaction === '-' &&
        dataQuery.repositoryOwner.repositories.pageInfo.hasPreviousPage
      ) {
        pageRef.current = `, before: "${endCursor}"`
        setPage(pageNumber)
      }
    }
  }

  useEffect(() => {
    if (dataQuery) {
      if (!dataQuery.repositoryOwner && appContext.search.searchValue) {
        appContext.snackbar.openSnackbar('warning', 'Usuário não encontrado.')
      }
    }
  }, [dataQuery, appContext.snackbar, appContext.search.searchValue])

  if (!appContext.search.searchValue || !dataQuery)
    return (
      <div className='home-logo'>{loading ? <Loading /> : <FaGithub />}</div>
    )

  return (
    <div className='container-search-repositories-by-users'>
      <Profile
        avatarUrl={
          dataQuery.repositoryOwner ? dataQuery.repositoryOwner.avatarUrl : ''
        }
        userGit={
          dataQuery.repositoryOwner ? dataQuery.repositoryOwner.login : ''
        }
        urlGit={dataQuery.repositoryOwner ? dataQuery.repositoryOwner.url : ''}
      />
      <RepositoryList data={dataQuery} />
      {dataQuery.repositoryOwner ? (
        <>
          <div style={{ backgroundColor: '#8b8b8b' }}></div>
          <Pagination page={page} handlePage={handlePage} />
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchRepositoriesByUsers
