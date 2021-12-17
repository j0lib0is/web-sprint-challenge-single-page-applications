// Import dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
// Import routing
import { Route, Switch } from 'react-router-dom';
// Import components
import Nav from './components/Nav';
import Form from './components/Form';
import Conf from './components/Conf';
// Import styling
import './App.css';

// Build App
const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};

// Export App
export default App;
