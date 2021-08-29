import './style.scss'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

export interface PaginationProps {
  setPage: (page: Number) => void
  page: Number
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => (
  <div className='pagination'>
    <button onClick={() => setPage(page > 1 ? Number(page) - 1 : 1)}>
      {' '}
      <FaAngleLeft className='icon-pagination' size={20} />{' '}
    </button>
    <span>{page}</span>
    <button onClick={() => setPage(Number(page) + 1)}>
      {' '}
      <FaAngleRight className='icon-pagination' size={20} />{' '}
    </button>
  </div>
)
export default Pagination
