import './style.scss'

export interface SwitchProps {
    onClick?: () => void
    checked?: boolean
}
 
const Switch: React.FC<SwitchProps> = ({onClick = () => {}, checked = false}) => ( 
    <label className="switch">
        <input type="checkbox" onChange={onClick}  checked={checked} />
        <div>
            <span></span>
        </div>
    </label>
)
 
export default Switch
