// Import dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import validation
import * as yup from 'yup';
import FormSchema from './validation/formSchema';
// Import routing
import { Route, Link } from 'react-router-dom';
// Import components
import Nav from './components/Nav';
import Form from './components/Form';
import Conf from './components/Conf';
// Import styling
import './App.css';

// Set defaults
const defaultOrders = [];

const defaultValues = {
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  onions: false,
  peppers: false,
  olives: false,
  garlic: false,
  gluton: false,
  special: '',
  name: '',
};

const defaultErrors = {
  size: '',
  sauce: '',
  name: '',
};

const defaultDisabled = true;

// Build App
const App = () => {
  // Set state
  const [ orders, setOrders ] = useState(defaultOrders);
  const [ formValues, setFormValues ] = useState(defaultValues);
  const [ formErrors, setFormErrors ] = useState(defaultErrors);
  const [ disabled, setDisabled ] = useState(defaultDisabled);

  // Helper functions
  const postOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([ res.data, ...orders ]);
      })
      .catch(err => console.error(err))
      .finally(setFormValues(defaultValues))
  }

  const validate = (name, value) => {
    yup.reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  // Event handlers
  const changeHandler = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const submitHandler = () => {
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      onions: formValues.onions,
      peppers: formValues.peppers,
      olives: formValues.olives,
      garlic: formValues.garlic,
      gluton: formValues.gluton,
      special: formValues.special.trim(),
      name: formValues.name.trim(),
    }
    postOrder(newOrder);
  }

  // Side effect handlers
  useEffect(() => {
    FormSchema.isValid(formValues)
    .then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div>
      <Nav />
      <div className='container'>
        <Route exact path='/'>
          <Link to={`/pizza`} id='order-pizza'>
            <button>Order Pizza</button>
          </Link>
        </Route>
        <Route path='/pizza'>
          <Form
          values={formValues}
          change={changeHandler}
          submit={submitHandler}
          disabled={disabled}
          errors={formErrors}
        />
        </Route>
      </div>
    </div>
  );
};

// Export App
export default App;
