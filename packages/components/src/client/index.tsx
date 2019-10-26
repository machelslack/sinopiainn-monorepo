import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

declare global {
  interface Window { __INITIAL_DATA__: any; }
}

hydrate(
  <App pageData={window.__INITIAL_DATA__ || {}}/>,
  document.getElementById('clientApp')
);