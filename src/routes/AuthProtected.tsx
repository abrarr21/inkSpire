import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

const AuthProtected = () => {
    const { loggedInUser } = useAuth();

    if (loggedInUser) {
        return <Navigate to={"/"} />;
    }
    return <Outlet />;
};

export default AuthProtected;
