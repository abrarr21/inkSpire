import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthProtected from "./AuthProtected";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        element: <AuthProtected />,
        children: [
            {
                path: "",
                element: <App />,
                children: [
                    {
                        path: "/login",
                        element: <LoginPage />,
                    },
                    {
                        path: "/register",
                        element: <RegisterPage />,
                    },
                ],
            },
        ],
    },

    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/",
                element: <App />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "dashboard",
                        element: <DashboardPage />,
                    },
                ],
            },
        ],
    },
]);

const AppRoute = () => {
    return <RouterProvider router={router} />;
};

export default AppRoute;
