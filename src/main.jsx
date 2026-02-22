import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from './components/MDXComponents'
import App from './App'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MDXProvider components={MDXComponents}>
      <App />
    </MDXProvider>
  </BrowserRouter>,
)
