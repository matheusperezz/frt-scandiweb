import { createBrowserRouter } from 'react-router-dom';
import ListProducts from '../pages/ListProducts';

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListProducts />,
        children: []
    }
])

export default router;