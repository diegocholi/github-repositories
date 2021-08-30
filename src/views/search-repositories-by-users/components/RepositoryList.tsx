import { convertDate } from '../../../utils/convertDate'
import { Card } from '../../../components'
import { memo } from 'react'
import { Repository } from '../.../../../../models/Repository'
export interface RepositoryListProps {
  data: Repository
}

const RepositoryList: React.FC<RepositoryListProps> = ({ data }) => {
  return (
    <div className='repository-list'>
      <div className='container'>
        <div className='col-4'>
          {data.repositoryOwner
            ? data.repositoryOwner.repositories.edges.map((item, key) => {
                return (
                  <Card
                    key={key}
                    onClick={() =>
                      window.open(
                        `https://github.com/${item.node.resourcePath}`
                      )
                    }
                  >
                    <div className='card-component-title'>{item.node.name}</div>
                    <div className='card-component-date'>
                      {convertDate(new Date(item.node.createdAt))}
                    </div>
                    <div className='card-component-branch'>
                      {item.node.defaultBranchRef
                        ? item.node.defaultBranchRef.name
                        : ''}
                    </div>
                    {item.node.languages.edges.map((language, key) =>
                      language ? (
                        <div
                          className='card-component-language'
                          style={{
                            backgroundColor: language.node.color,
                          }}
                          key={key}
                        >
                          {language.node.name}
                        </div>
                      ) : (
                        ''
                      )
                    )}
                  </Card>
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}

export default memo(RepositoryList)
