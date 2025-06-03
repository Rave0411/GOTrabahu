import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { ContextProvider } from './contexts/contextprovider.jsx'
import { EditingProvider } from './contexts/editingContext.jsx'
import './index.css'
import router from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <EditingProvider>
        <RouterProvider router={router}/>
      </EditingProvider>
    </ContextProvider>
  </React.StrictMode>,
)
