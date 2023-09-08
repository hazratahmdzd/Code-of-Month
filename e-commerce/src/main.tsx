import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { CartProvider } from './components/Context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
)
