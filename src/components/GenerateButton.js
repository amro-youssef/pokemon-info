import React from 'react';
import './GenerateButton.css';

const GenerateButton = ( {handleClick}) => {
	return (
		<div>
			<button
				 class="button"
				 onClick={handleClick}>
				 Generate
			 </button>
		</div>
	);
}


export default GenerateButton;
