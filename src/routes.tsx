import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./pages/Login/Login.tsx";
import { LayoutOutlet } from "./Layout/Outlet/LayoutOutlet.tsx";
import { Register } from "./pages/Register/Register.tsx";
import { Feed } from "./pages/Feed/Feed.tsx";
import { UserList } from "./pages/UserList/UserList.tsx";
import { Profile } from "./pages/Profile/Profile.tsx";
import { Explore } from "./pages/Explore/Explore.tsx";
import { ProtectedRoutes } from "./components/Protected/ProtectedRoutes.tsx";


export const routes = createBrowserRouter ([

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element:(
            <ProtectedRoutes>
                <LayoutOutlet />
            </ProtectedRoutes>
        ),
        children: [
            {
                index: true,
                element: <Navigate to= "/login" replace />
            },
            {
                path: "/feed",
                element: <Feed />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/explore",
                element:<Explore />
            },
            {
                path: "/userlist",
                element:<UserList />
            },
        ]
    }

]);