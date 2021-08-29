import { convertDate } from '../../../utils/convertDate'
import { Card } from '../../../components'

export interface RepositoryListProps {
  data: Array<any>
}

const RepositoryList: React.FC<RepositoryListProps> = ({ data }) => {
  return (
    <div className='repository-list'>
      <div className='container'>
        <div className='col-4'>
          {data.map((item, key) => (
            <Card key={key} onClick={() => window.open(item.html_url)}>
              <div className='card-component-title'>{item.name}</div>
              <div className='card-component-date'>
                {convertDate(new Date(item.created_at))}
              </div>
              <div className='card-component-branch'>{item.default_branch}</div>
              <div className='card-component-language'>{item.language}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RepositoryList
