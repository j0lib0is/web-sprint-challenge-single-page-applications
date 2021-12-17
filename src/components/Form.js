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
	// Declare state
	const { values, change, submit, disabled, errors} = props;

	// Form functions
	const onChange = event => {
		const { name, value, checked, type } = event.target;
		const usedValue = type === 'checkbox' ? checked : value;
		change(name, usedValue);
	}

	const onSubmit = event => {
		event.preventDefault();
		submit();
	}

	// Return Elements
	return (
		<StyledForm>
			<form id='pizza-form' onSubmit={onSubmit}>
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
							value={values.red}
							onChange={onChange}
						></input>
						Organic Red
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='sauce'
							value='Garlic Ranch'
							value={values.ranch}
							onChange={onChange}
						></input>
						Garlic Ranch
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='sauce'
							value='BBQ Sauce'
							value={values.bbq}
							onChange={onChange}
						></input>
						BBQ Sauce
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='sauce'
							value='Spinach Alfredo'
							value={values.alfredo}
							onChange={onChange}
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
									value={values.pepperoni}
									onChange={onChange}
								/>
								Pepperoni
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Italian Sausage'
									onChange={onChange}
								/>
								Italian Sausage
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Canadian Bacon'
									value={values.bacon}
									onChange={onChange}
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
									value={values.onions}
									onChange={onChange}
								/>
								Onions
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Green Peppers'
									value={values.peppers}
									onChange={onChange}
								/>
								Green Peppers
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Black Olives'
									value={values.olives}
									onChange={onChange}
								/>
								Black Olives
							</label>
							<label className='checkbox'>
								<input
									type='checkbox'
									name='Roasted Garlic'
									value={values.garlic}
									onChange={onChange}
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
							value={values.gluton}
							onChange={onChange}
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
						<input type='text' name='special' id='special-text' onChange={onChange}></input>
					</label>
				</StyledSection>
				<StyledSectionHeader>
					<h3>Order Information</h3>
					<p>*Required</p>
				</StyledSectionHeader>
				<StyledSection>
					<label>
						<h5>Name</h5>
						<input type='text' name='name' id='name-input' onChange={onChange}></input>
					</label>
					
				</StyledSection>
				<StyledSection>
					<button id='order-button' disabled={disabled}>Submit Order</button>
					<div className='errors'>
						<div>{errors.size}</div>
						<div>{errors.sauce}</div>
						<div>{errors.name}</div>
					</div>
				</StyledSection>
			</form>
		</StyledForm>
	);
};

// Export Form
export default Form;