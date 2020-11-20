import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar, Nav } from 'react-bootstrap';
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider  domain="dev-6w9to6yp.us.auth0.com" 
                    clientId="0tyOZYxuKqSjrgSLPjtyB0EZVikW3qza"
                    redirectUri={window.location.origin}
                    audience="https://portfolio-api.com"
                    scope="reada:current_user update:current_user_metadata">

      <App />
      
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
