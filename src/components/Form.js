// Import dependencies
import React from 'react';
import styled from 'styled-components';

// Create styled components
const StyledForm = styled.div`
	margin: 0 auto;
	border: 1px solid ${pr => pr.theme.lightgrey};
	border-radius: 16px;
	overflow: hidden;
	form {
		width: 100%;
	}
`

const StyledSectionHeader = styled.div`
	background-color: ${pr => pr.theme.medBlue};
	color: ${pr => pr.theme.white};
	padding: 24px;
	h1, h2, h3, h4, h5, h6 {
		color: ${pr => pr.theme.white};
	}
`

const StyledSection = styled.div`
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	.columns {
		width: 100%;
		display: flex;
	}
	.columns .column {
		flex-grow: 1;
	}
	.dropdown {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.dropdown select {
		margin-top: 4px;
	}
	.checkbox {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		margin: 8px 0px;
	}
	.checkbox input {
		margin-right: 8px;
	}
	.radio {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		margin: 4px 0px;
	}
	.radio input {
		margin-right: 8px;
	}
`

// Build Form
function Form(props) {
	return (
		<StyledForm>
			<form id='pizza-form'>
				<StyledSectionHeader>
					<h3>Choose Your Size</h3>
					<p>*Required</p>
				</StyledSectionHeader>
				<StyledSection>
					<label className='dropdown'>
						<h5>Select a Size</h5>
						<select type='select' name='size' id='size-dropdown'>
							<option value=''>——Select a Size——</option>
							<option value='Small'>Small</option>
							<option value='Medium'>Medium</option>
							<option value='Large'>Large</option>
						</select>
					</label>
				</StyledSection>
				<StyledSectionHeader>
					<h3>Select a Sauce</h3>
					<p>*Required</p>
				</StyledSectionHeader>
				<StyledSection>
					<label className='radio'>
						<input
							type='radio'
							name='sauce'
							value='Organic Red'
						></input>
						Organic Red
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='sauce'
							value='Garlic Ranch'
						></input>
						Garlic Ranch
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='sauce'
							value='BBQ Sauce'
						></input>
						BBQ Sauce
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='sauce'
							value='Spinach Alfredo'
						></input>
						Spinach Alfredo
					</label>
				</StyledSection>
				<StyledSectionHeader>
					<h3>Add Toppings</h3>
					<p>Choose up to 10</p>
				</StyledSectionHeader>
				<StyledSection>
					<div className='columns'>
						<div className='column'>
							<h5>Meats</h5>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Pepperoni'
								/>
								Pepperoni
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Italian Sausage'
								/>
								Italian Sausage
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Canadian Bacon'
								/>
								Canadian Bacon
							</label>
						</div>
						<div className='column'>
							<h5>Veggies</h5>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Onions'
								/>
								Onions
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Green Peppers'
								/>
								Green Peppers
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Black Olives'
								/>
								Black Olives
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Roasted Garlic'
								/>
								Roasted Garlic
							</label>
						</div>
					</div>
				</StyledSection>
				<StyledSectionHeader>
					<h3>Any Substitutes?</h3>
					<p>*Optional</p>
				</StyledSectionHeader>
				<StyledSection>
					<label className='checkbox'>
						<input
							type='checkbox'
							name='Gluton Free'
						></input>
						Gluton Free Crust
					</label>
				</StyledSection>
				<StyledSectionHeader>
					<h3>Special Instructions</h3>
					<p>Anything else you'd like to add?</p>
				</StyledSectionHeader>
				<StyledSection>
					<label>
						<h5>Special Instructions</h5>
						<input type='text' name='special' id='special-text'></input>
					</label>
				</StyledSection>
				<StyledSectionHeader>
					<h3>Order Information</h3>
					<p>*Required</p>
				</StyledSectionHeader>
				<StyledSection>
					<label>
						<h5>Name</h5>
						<input type='text' name='name' id='name-input'></input>
					</label>
					<button id='order-button'>Submit Order</button>
				</StyledSection>
			</form>
		</StyledForm>
	);
};

// Export Form
export default Form;