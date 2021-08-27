import './style.scss'
import InputContext from './components/InputContext'
import InputWithProps from './components/InputProps'

export interface SwitchProps {
    onClick?: () => void
    checked?: boolean | undefined
    themeSwich?: boolean | undefined
}

const Switch: React.FC<SwitchProps> = ({onClick = undefined, checked = undefined, themeSwich = false}) => ( 
    <label className="switch">
        {themeSwich ? <InputContext /> : <InputWithProps onChange={onClick} checked={checked} />}
        <div>
            <span></span>
        </div>
    </label>
)
 
export default Switch
