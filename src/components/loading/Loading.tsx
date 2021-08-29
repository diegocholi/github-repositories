import './style.scss'
import { FaSpinner } from 'react-icons/fa'

export interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className='loading-container'>
      <FaSpinner className='loading' />
    </div>
  )
}

export default Loading
