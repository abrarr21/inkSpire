import { useContext } from "react";
import { Auth } from "../context/authContext";

export const useAuth = () => {
    const context = useContext(Auth);

    if (!context) {
        throw new Error("useAuth must be within auth provider");
    }

    return context;
};
