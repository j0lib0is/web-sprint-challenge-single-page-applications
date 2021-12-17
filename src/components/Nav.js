// Import dependencies
import React from 'react';
import styled from 'styled-components';

// Create styled component
const StyledNav = styled.div`
	width: 100%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
	.logo-type {
		font-weight: 700;
		font-size: 4.8rem;
		color: ${pr => pr.theme.primaryBright};
	}
`

// Build Navigation
function Nav(props) {
	return (
		<StyledNav>
			<p className='logo-type'>Lambda Eats</p>
		</StyledNav>
	);
};

// Export Navigation
export default Nav;