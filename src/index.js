// Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Import styling
import './index.css';
// Import components
import App from './App';

ReactDOM.render(
	<Router>
		<App />
	</Router>
	, document.getElementById("root")
);
