import { convertDate } from '../../../utils/convertDate'
export interface RepositoryListProps {
    data: Array<any>
}
 
const RepositoryList: React.FC<RepositoryListProps> = ({data}) => {
    return ( 
        <div className='repository-list'>
            <div className='container' >
                <div className='col-4'>
                    {data.map((item, key) => (
                        <div 
                            className='card-repository' 
                            key={key}
                            onClick={() => window.open(item.html_url)}>
                            <div className='card-repository-title'>
                                {item.name}
                            </div>
                            <div className='card-repository-date'>
                                {convertDate(new Date(item.created_at))}
                            </div>
                            <div className='card-repository-branch'>
                                {item.default_branch}
                            </div>
                            <div className='card-repository-language'>
                                {item.language}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default RepositoryList;