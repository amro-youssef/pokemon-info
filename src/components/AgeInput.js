import react, {Component} from 'react';

const AgeInput = ({ change }) => {
	return (
			<div className='pa2'>
				<input 
					className='pa3 ba b--green bg-lightest-red'
					type='number' 
					min='1'
					placeholder='enter your age'
					onChange={change}
				 />
		</div>
	)
}

export default AgeInput;