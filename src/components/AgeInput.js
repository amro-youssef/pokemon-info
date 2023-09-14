import react, {Component} from 'react';

const AgeInput = ({logo}) => {
	return (
			<div className='pa2'>
				<input 
					className='pa3 ba b--green bg-lightest-red'
					type='number' 
					placeholder='enter your age'
					// onChange={searchChange}
				 />
		</div>
	)
}

export default AgeInput;