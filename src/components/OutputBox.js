import react, {Component} from 'react';

const OutputBox = ({ output }) => {
	return (
			<div
			 id="text-box"
			 style={{"margin-top": "25px", "white-space": "pre-wrap"}}>
				{`${output}`}

			</div>
	)
}

export default OutputBox;