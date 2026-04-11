import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthProtected from "./AuthProtected";
import ProtectedRoute from "./ProtectedRoute";
import NewArticlePage from "../pages/NewArticlePage";
import BlogViewPage from "../pages/BlogViewPage";
import EditBlog from "../pages/EditBlog";

const router = createBrowserRouter([
    {
        element: <AuthProtected />,
        children: [
            {
                path: "",
                element: <App />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                    {
                        path: "register",
                        element: <RegisterPage />,
                    },
                ],
            },
        ],
    },

    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/blog/:id",
                element: <BlogViewPage />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage />,
                    },
                    {
                        path: "dashboard/new",
                        element: <NewArticlePage />,
                    },
                    {
                        path: "dashboard/edit/:id",
                        element: <EditBlog />,
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
