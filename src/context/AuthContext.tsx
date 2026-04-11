import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState } from "react";
import type { LoginDataType, RegisterDataType } from "../types";
import { getLocalStorage } from "../utils/localStorage";

type AuthContextDataType = {
    registeredUser: RegisterDataType[];
    setRegisteredUser: Dispatch<SetStateAction<RegisterDataType[]>>;
    loggedInUser: LoginDataType | null;
    setLoggedInUser: Dispatch<SetStateAction<LoginDataType | null>>;
};

export const Auth = createContext<AuthContextDataType | null>(null);

export const AuthContext = ({ children }: { children: ReactNode }) => {
    const [registeredUser, setRegisteredUser] = useState<RegisterDataType[]>(
        () => {
            const state = getLocalStorage("blog-users");
            return state ? JSON.parse(state) : [];
        },
    );

    const [loggedInUser, setLoggedInUser] = useState(() => {
        const state = getLocalStorage("blog-current-user");
        return state ? JSON.parse(state) : null;
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
