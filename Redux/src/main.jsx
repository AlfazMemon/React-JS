import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Store } from './Store.jsx'


createRoot(document.getElementById('root')).render(

 <Provider store={Store}>
    <App />
 </Provider> 
)
