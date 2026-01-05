import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Games from "../Pages/Games";
import GameDetails from "../Pages/GameDetails";
import Indie from "../Pages/Indie";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgotPassword from "../Pages/ForgetPassword";

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
                Component: Indie
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                    <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <PrivateRoute>
                    <UpdateProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: '/forgot-password',
                Component: ForgotPassword
            }

            
            
        ]

    }
])

export default router