import { Html } from '@react-three/drei'

interface IButton {
	hideButton: boolean
	handleOnClick: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = (props: IButton) => {
	return (
		<Html>
			<div className='container'>
				<button hidden={props.hideButton} onClick={props.handleOnClick}>
					Start journey
				</button>
			</div>
		</Html>
	)
}

export default Button
