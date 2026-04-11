import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState } from "react";
import type { LoginDataType, RegisterDataType } from "../types";

type AuthContextDataType = {
    registeredUser: RegisterDataType[];
    setRegisteredUser: Dispatch<SetStateAction<RegisterDataType[]>>;
    loggedInUser: LoginDataType;
    setLoggedInUser: Dispatch<SetStateAction<LoginDataType | null>>;
};

export const Auth = createContext<AuthContextDataType | null>(null);

export const AuthContext = ({ children }: { children: ReactNode }) => {
    const [registeredUser, setRegisteredUser] = useState<RegisterDataType[]>(
        () => {
            const state = localStorage.getItem("blog-users");
            return state ? JSON.parse(state) : [];
        },
    );

    const [loggedInUser, setLoggedInUser] = useState(() => {
        const state = localStorage.getItem("blog-current-user");
        return state ? JSON.parse(state) : undefined;
    });

    return (
        <Auth.Provider
            value={{
                registeredUser,
                setRegisteredUser,
                setLoggedInUser,
                loggedInUser,
            }}
        >
            {children}
        </Auth.Provider>
    );
};
