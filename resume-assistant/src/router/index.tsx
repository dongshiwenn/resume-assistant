import { Navigate } from "react-router-dom"; // 重定向

// 引入组件
import Home from '@/views/Home';
import Login from '@/views/Login';

const routes = [
    {
        path: '/',
        element: <Navigate to="/login"/>
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default routes;