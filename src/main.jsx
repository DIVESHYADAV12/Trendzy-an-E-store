import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// FIX: Import only the default provider
import ProductDetailsProvider from './Context/Product.jsx'

// Cart context
import { CartProvider } from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
      <ProductDetailsProvider>
      <CartProvider>
        <App />
     </CartProvider>
      </ProductDetailsProvider>
    
  </BrowserRouter>
)
