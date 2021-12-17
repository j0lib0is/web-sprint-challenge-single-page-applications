describe('Lambda Eats', () => {
	// Reset page for each test
	beforeEach(() => {
		cy.visit('http://localhost:3000/pizza');
	})

	// Identify elements
	const sizeDropdown = () => cy.get('select');
	const sauceRadio = () => cy.get('[type=radio]');
	const pepperoniCheckbox = () => cy.get('input[name=pepperoni]');
	const sausageCheckbox = () => cy.get('input[name=sausage]');
	const baconCheckbox = () => cy.get('input[name=bacon]');
	const onionsCheckbox = () => cy.get('input[name=onions]');
	const peppersCheckbox = () => cy.get('input[name=peppers]');
	const olivesCheckbox = () => cy.get('input[name=olives]');
	const garlicCheckbox = () => cy.get('input[name=garlic]');
	const glutonCheckbox = () => cy.get('input[name=gluton]');
	const specialInput = () => cy.get('input[name=special]');
	const nameInput = () => cy.get('input[name=name]');
	const submitButton = () => cy.contains('Add to Order');
	
	// Check Cypress status
	it('Hello? Is this thing on?', () => {
		expect(1 + 2).to.equal(3);
	})
	
	// Check that elements exist
	it('Elements exist', () => {
		sizeDropdown().should('exist');
		sauceRadio().should('exist');
		pepperoniCheckbox().should('exist');
		sausageCheckbox().should('exist');
		baconCheckbox().should('exist');
		onionsCheckbox().should('exist');
		peppersCheckbox().should('exist');
		olivesCheckbox().should('exist');
		garlicCheckbox().should('exist');
		glutonCheckbox().should('exist');
		specialInput().should('exist');
		nameInput().should('exist');
		submitButton().should('exist');
	})

	// Write tests
	describe('Fills out the "New Order" form', () => {
		it('Visits the correct url', () => {
			cy.url().should('include', 'localhost');
		})

		it('Inputs start out empty', () => {
			sizeDropdown().should('have.value', '');
			sauceRadio().should('not.be.checked');
			pepperoniCheckbox().should('not.be.checked');
			sausageCheckbox().should('not.be.checked');
			baconCheckbox().should('not.be.checked');
			onionsCheckbox().should('not.be.checked');
			peppersCheckbox().should('not.be.checked');
			olivesCheckbox().should('not.be.checked');
			garlicCheckbox().should('not.be.checked');
			glutonCheckbox().should('not.be.checked');
			specialInput().should('have.value', '');
			nameInput().should('have.value', '');
		})

		it('Add to Order button starts out disabled', () => {
			submitButton().should('be.disabled');
		})

		it('Fill out the form', () => {
			sizeDropdown()
				.select('medium')
				.should('have.value', 'medium');
			sauceRadio()
				.check('ranch')
				.should('have.value', 'ranch');
			pepperoniCheckbox()
				.check()
				.should('be.checked');
			baconCheckbox()
				.check()
				.should('be.checked');
			onionsCheckbox()
				.check()
				.should('be.checked');
			glutonCheckbox()
				.check()
				.should('be.checked');
			specialInput()
				.type('Make the crust extra stuffed')
				.should('have.value', 'Make the crust extra stuffed')
			nameInput()
				.type('Santa Clause')
				.should('have.value', 'Santa Clause')
			submitButton()
				.should('not.be.disabled');
		})

		it('Submit an order', () => {
			sizeDropdown().select('medium')
			sauceRadio().check('ranch')
			pepperoniCheckbox().check()
			baconCheckbox().check()
			onionsCheckbox().check()
			glutonCheckbox().check()
			specialInput().type('Make the crust extra stuffed')
			nameInput().type('Santa Clause')
			submitButton().click();
		})
	})
})