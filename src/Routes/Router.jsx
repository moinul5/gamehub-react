import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Games from "../Pages/Games";
import GameDetails from "../Pages/GameDetails";
import indie from "../Pages/indie";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: '/games',
                Component: Games
            },
            {
                path: '/games/:id',
                element: (
                    <PrivateRoute>
                        <GameDetails></GameDetails>
                    </PrivateRoute>
                )
            },
            {
                path:'/indie',
                Component: indie
            },
            {
                path: '/my-profile',
                Component: Profile
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                    <Profile />
                    </PrivateRoute>
                ),
            }
            
            
        ]

    }
])

export default router