import type { ReactNode } from "react";
import { useState } from "react";
import type { RegisterDataType } from "../types";
import { storage } from "../utils/localStorage";
import { Auth } from "./authContext";

export const AuthContext = ({ children }: { children: ReactNode }) => {
    const [registeredUser, setRegisteredUser] = useState<RegisterDataType[]>(
        () => {
            const data = storage.get("blog-users");
            if (data === null) return [];
            return data;
        },
    );

    const [loggedInUser, setLoggedInUser] = useState(() =>
        storage.get("blog-current-user"),
    );

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
