import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./pages/Login/Login.tsx";
import { LayoutOutlet } from "./Layout/Outlet/LayoutOutlet.tsx";
import { Register } from "./pages/Register/Register.tsx";
import { Feed } from "./pages/Feed/Feed.tsx";
import { UserList } from "./pages/UserList/UserList.tsx";
import { Profile } from "./pages/Profile/Profile.tsx";
import { Explore } from "./pages/Explore/Explore.tsx";


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
        element:<LayoutOutlet />,
        children: [
            {
                index: true,
                element: <Navigate to= "/login" replace /> // O redirecionamento do index e do 404 sempre vai para /login, 
                // mesmo se o usuário já estiver autenticado. Quando você implementar autenticação, vale trocar 
                // o <Navigate to="/login" /> por um componente de guarda — algo como <RequireAuth /> que verifica o 
                // token e decide para onde redirecionar. Mas isso é pós-autenticação, não urgente agora.
            },
            {
                path: "feed",
                element: <Feed />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "explore",
                element:<Explore />
            },
            {
                path: "userlist",
                element:<UserList />
            },
        ]
    }

]);