import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProtectedRoute = () => {
    const { loggedInUser } = useAuth();

    useEffect(() => {
        if (!loggedInUser) {
            toast.error("Unauthorized user", {
                duration: 2000,
                position: "bottom-right",
            });
        }
    });

    if (!loggedInUser) {
        return <Navigate to={"/login"} replace />;
    }

    if (loggedInUser) {
        if (loggedInUser.role === "Reader") {
            return <Navigate to={"/"} replace />;
        }
    }

    return <Outlet />;
};

export default ProtectedRoute;
