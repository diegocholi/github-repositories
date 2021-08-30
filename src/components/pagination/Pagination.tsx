import './style.scss'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

export interface PaginationProps {
  handlePage: (page: Number, operation?: '-' | '+') => void
  page: Number
}

const Pagination: React.FC<PaginationProps> = ({ page, handlePage }) => (
  <div className='pagination'>
    <button onClick={() => handlePage(Number(page) - 1, '-')}>
      <FaAngleLeft className='icon-pagination' size={20} />
    </button>
    {/* <span>{page}</span> */}
    <div></div>
    <button onClick={() => handlePage(Number(page) + 1, '+')}>
      <FaAngleRight className='icon-pagination' size={20} />
    </button>
  </div>
)
export default Pagination
