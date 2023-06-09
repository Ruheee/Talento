import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { CookiesProvider } from "react-cookie";

axios.defaults.baseURL = 'http://localhost:8005'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-aqyh6g1cz81cmqbm.us.auth0.com"
      clientId="spvFR3hekTCoajKUwC1DinYBuimjO18z"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Auth0Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
