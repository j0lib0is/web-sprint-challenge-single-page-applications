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
    <div>
      <Nav />
      <div className='container'>
        <Form />
      </div>
    </div>
  );
};

// Export App
export default App;
