import { createBrowserRouter } from 'react-router-dom';
import ListProducts from '../pages/ListProducts';
import AddProduct from '../pages/AddProduct';

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListProducts />,
        children: []
    },
    {
        path: "addproduct",
        element: <AddProduct />,
        children: []
    }
])

export default router;