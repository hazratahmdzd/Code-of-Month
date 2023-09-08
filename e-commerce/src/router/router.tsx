import { createBrowserRouter } from "react-router-dom";
import { Home, Products, Details, Cart } from "../pages";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/products',
        element: <Products/>
    },
    {
        path: '/details/:id',
        element: <Details/>
    },
    {
        path: '/cart',
        element: <Cart/>
    }
]);