import React from 'react';

const NameInput = ({ searchChange }) => {
	return (
		<div className='pa2'>
		<input 
			className='pa3 ba b--green bg-lightest-red'
			type='text' 
			placeholder='enter your name'
			onChange={searchChange}
		 />
		</div>
	);
}

export default NameInput;