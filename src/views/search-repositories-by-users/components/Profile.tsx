import { FaGithubAlt } from 'react-icons/fa'
import { memo } from 'react'
export interface ProfileProps {
  avatarUrl?: string
  userGit?: string
  urlGit?: string
}

const Profile: React.FC<ProfileProps> = ({
  avatarUrl = '',
  userGit = '',
  urlGit = '',
}) => {
  if (!avatarUrl || !userGit || !urlGit) return <></>
  return (
    <div className='profile-user'>
      <div className='avatar-user-content'>
        <img className='avatar-user' src={avatarUrl} alt='avatar' />
      </div>
      <span className='user-login'>{userGit}</span>
      <div className='git-hub-profile-button-container'>
        <a
          className='git-hub-profile-button'
          href={urlGit}
          target='_blank'
          rel='noreferrer'
        >
          Gitbub &nbsp;
          <FaGithubAlt />
        </a>
      </div>
    </div>
  )
}

export default memo(Profile)
