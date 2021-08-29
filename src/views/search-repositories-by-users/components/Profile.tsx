import { FaGithubAlt } from 'react-icons/fa'

export interface ProfileProps {
  avatarUrl?: string
  userGit?: string
  urlGit?: string
}

const Profile: React.FC<ProfileProps> = ({
  avatarUrl = 'https://avatars.githubusercontent.com/u/48794883?v=4',
  userGit = 'diegocholi',
  urlGit = 'https://github.com/diegocholi',
}) => {
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

export default Profile
