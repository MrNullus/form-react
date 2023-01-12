import { useState } from 'react';
import './styles.scss';

function FormInput({ placeholder, onChange, id, label, name, errorMessage, ...inputProps }) {

	const [ focused, setFocused ] = useState(false);

	const handleFocus = ({ target }) => {
		setFocused(true);
	};

	return (
		<div className="formInput">
			<label 
				htmlFor={ name }>
				{ label }
			</label>

			<input 
				id={ id } 
				name={ name }
				{ ...inputProps }
				onChange={ onChange }
				onBlur={ handleFocus }
				onFocus={ () => {
					name === "confirmPassword" && setFocused(true)
				}}
				focused={ focused.toString() }
			/>

			<span>
				{ errorMessage }
			</span>
		</div>
	);
}

export default FormInput;