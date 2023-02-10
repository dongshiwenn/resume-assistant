import { Navigate } from "react-router-dom"; // 重定向

// 引入组件
import Home from '@/views/Home';
import Login from '@/views/Login';
import FillDetails from "@/views/FillDetails";

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
            },
            {
                path: '/detail',
                element: <FillDetails />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default routes;