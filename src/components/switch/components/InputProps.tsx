export interface InputWithPropsProps {
  onChange?: () => void | undefined
  checked?: boolean | undefined
}
const InputWithProps: React.FC<InputWithPropsProps> = ({
  onChange = undefined,
  checked = false,
}) => <input type='checkbox' onChange={onChange} checked={checked} />
export default InputWithProps
