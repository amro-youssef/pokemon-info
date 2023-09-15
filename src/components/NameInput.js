import React from 'react';

const NameInput = ({ change }) => {
	return (
		<div className='pa2'>
		<input 
			className='pa3 ba b--green bg-lightest-red'
			type='text' 
			placeholder='enter your name'
			onChange={change}
		 />
		</div>
	);
}

export default NameInput;
