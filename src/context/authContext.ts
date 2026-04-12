import { createContext, type Dispatch, type SetStateAction } from "react";
import type { LoginDataType, RegisterDataType } from "../types";

type AuthContextDataType = {
    registeredUser: RegisterDataType[];
    setRegisteredUser: Dispatch<SetStateAction<RegisterDataType[]>>;
    loggedInUser: LoginDataType | null;
    setLoggedInUser: Dispatch<SetStateAction<LoginDataType | null>>;
};

export const Auth = createContext<AuthContextDataType | null>(null);
