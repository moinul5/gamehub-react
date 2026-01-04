import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Games from "../Pages/Games";
import GameDetails from "../Pages/GameDetails";

const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
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
                Component: GameDetails
            }
        ]

    }
])

export default router