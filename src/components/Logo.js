import react, {Component} from 'react';

const Logo = ({logo}) => {
	return (
			<div class="pa4 tc ">
        		<img src={logo}
            		class="br-100 ba h3 w3 dib"
            		alt="avatar"/>
      		</div>
	)
}

export default Logo;