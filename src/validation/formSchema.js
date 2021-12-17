import * as yup from 'yup';

// Build Schema
const formSchema = yup.object().shape({
	size: yup
		.string()
		.required('Please select a size'),
	sauce: yup
		.string()
		.required('Please select a sauce'),
	pepperoni: yup.boolean(),
	sausage: yup.boolean(),
	bacon: yup.boolean(),
	onions: yup.boolean(),
	peppers: yup.boolean(),
	olives: yup.boolean(),
	garlic: yup.boolean(),
	gluton: yup.boolean(),
	special: yup
		.string()
		.trim(),
	name: yup
		.string()
		.trim()
		.min(2, 'name must be at least 2 characters')
		.required('Please include a name'),
})

// Export Schema
export default formSchema;