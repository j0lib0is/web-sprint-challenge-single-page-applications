// Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Import styling
import './index.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme/index';
// Import components
import App from './App';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router>
			<App />
		</Router>
	</ThemeProvider>
	, document.getElementById("root")
);
