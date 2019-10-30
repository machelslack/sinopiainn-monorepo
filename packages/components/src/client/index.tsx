import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

declare global {
  interface Window { __INITIAL_DATA__: any; }
}

hydrate(
  <BrowserRouter>
    <App pageData={window.__INITIAL_DATA__ || {}} />
  </BrowserRouter>,
  document.getElementById('clientApp')
);
